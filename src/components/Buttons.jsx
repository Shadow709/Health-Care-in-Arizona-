import React from "react";
import { Button } from "@/components/ui/button";

export default function button({ text, onclick }) {
  return (
    <Button className="text-white" onClick={onclick}>
      {text}
    </Button>
  );
}
