# `components/shared/method-switch.tsx`

Зараз ліва колонка — самі кнопки-таби, ілюстрації немає. У макеті кнопки стоять
над панеллю, а ліва колонка панелі — анімована схема методу.

```diff
+import { EndovascularAccess } from "@/components/vessels/endovascular-access";
+import { MicrosurgicalClip } from "@/components/vessels/microsurgical-clip";
+
 export function MethodSwitch({ methods }: MethodSwitchProps) {
   const [active, setActive] = useState<TreatmentMethod["method"]>(
     methods[0]?.method ?? "endovascular"
   );
   const current = methods.find((item) => item.method === active) ?? methods[0];
 
   return (
-    <div className="glass grid overflow-hidden gap-5 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
-      <div
-        role="tablist"
-        aria-label="Метод лікування"
-        className="flex max-w-105 gap-2 rounded-lg bg-deep/60 p-1"
-      >
+    <div>
+      <div
+        role="tablist"
+        aria-label="Метод лікування"
+        className="mb-3.5 flex max-w-105 gap-2 rounded-lg border border-white/12 bg-white/6 p-1"
+      >
         {methods.map((item) => ( … без змін … ))}
       </div>
 
-      {current ? (
-        <div>
+      {current ? (
+        <div className="glass grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
+          <div className="flex items-center bg-deep px-0 py-2">
+            {active === "endovascular" ? (
+              <EndovascularAccess className="h-auto w-full" />
+            ) : (
+              <MicrosurgicalClip className="h-auto w-full" />
+            )}
+          </div>
+
+          <div className="p-5 sm:p-6">
             <p className="text-base text-ink-body">{current.description}</p>
             <ul className="mt-4 flex flex-col gap-2">
               … без змін …
             </ul>
+          </div>
         </div>
       ) : null}
     </div>
   );
 }
```

Перемикання методу міняє SVG — анімація стартує заново, це навмисно: користувач
бачить, як катетер заходить у судину після кліку.
