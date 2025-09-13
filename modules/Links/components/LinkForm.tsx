"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Plus,
  Instagram,
  Youtube,
  Mail,
  Archive,
  FolderPlus,
  Camera,
  Edit3,
  X,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";
import React from 'react';

interface Props{
  username: String;
  bio: String;
}

const LinkForm = ({username,bio}:Props) => {
  return (
    <div>
      Linkform
    </div>
  )
}

export default LinkForm
