"use client";

import { ReactNode } from "react";

export default function ClientBody({ children }: { children: ReactNode }) {
  return <body>{children}</body>;
}
