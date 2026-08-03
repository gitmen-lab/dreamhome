"use client";

import dynamic from "next/dynamic";

const ServiceAreaMapInner = dynamic(() => import("./ServiceAreaMapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[480px] w-full items-center justify-center rounded-lg border bg-muted text-sm text-muted-foreground">
      Loading map…
    </div>
  ),
});

export function ServiceAreaMap() {
  return <ServiceAreaMapInner />;
}
