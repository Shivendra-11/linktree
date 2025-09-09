import { db } from "@/lib/db";


export async function getAvailableUsernameSuggestions(base:string , count = 3 , maxTries=10) {


    const suggestions = new Set<string>();
    let tries = 0;
    while (suggestions.size < count && tries < maxTries) {
        const randomNum = Math.floor(100 + Math.random() * 900); // Generate a random 3-digit number
        const suggestion = `${base}${randomNum}`;
        const existingUser = await db.user.findUnique({
            where: { username: suggestion }
        });
        if (!existingUser) {
            suggestions.add(suggestion);
        }   
        tries++;
    }
    return Array.from(suggestions);

}

