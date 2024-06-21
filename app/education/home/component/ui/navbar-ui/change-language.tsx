"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ChangeLanguage() {
  return (
    <Select>
      <SelectTrigger className="w-[150px] rounded-full">
        <SelectValue placeholder="Language" className="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="myanmar">Myanmar</SelectItem>
          <SelectItem value="thailand">Thailand</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
