# `components/shared/condition-card.tsx`

Картка має отримати `animated`, щоб схема не крутилась поза екраном.

```diff
+"use client";
+
+import { useInView } from "@/lib/use-in-view";
+
 export function ConditionCard({ slug, title, … }: ConditionCardProps) {
+  const { ref, inView } = useInView<HTMLDivElement>();
   const Illustration = ILLUSTRATIONS[slug];
 
   return (
-    <div className="glass overflow-hidden">
+    <div ref={ref} className="glass overflow-hidden">
       <div className="bg-deep py-1.5">
-        <Illustration className="h-26 w-full" />
+        <Illustration animated={inView} className="h-26 w-full" />
       </div>
```

Те саме — для герой-візуала: `<CircleOfWillis animated flow />` лишається завжди
ввімкненим (він над згином), а всі схеми нижче йдуть через `useInView`.
