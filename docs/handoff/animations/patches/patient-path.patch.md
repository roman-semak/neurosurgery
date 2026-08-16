# `components/shared/patient-path.tsx`

Лінія зараз акцентна пунктирна. У макеті це судина: суцільний градієнт
артерія → вена з м'якою пульсацією, і вузол-«отвір» на кожному кроці.

```diff
     <ol className="relative grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
-      <svg
-        aria-hidden="true"
-        className="pointer-events-none absolute top-4 right-4 left-4 -z-10 hidden h-1 w-[calc(100%-2rem)] lg:block"
-        preserveAspectRatio="none"
-        viewBox="0 0 100 1"
-      >
-        <line … strokeDasharray="3 3" data-flow="" className="animate-vflow" />
-      </svg>
+      {/* судинний конектор — горизонтальний на lg */}
+      <span
+        aria-hidden="true"
+        data-pulse=""
+        className="vessel-line-x animate-vpulse pointer-events-none absolute top-4 right-4 left-4 -z-10 hidden h-[3px] lg:block"
+      />
+      {/* вертикальний варіант для phone/tablet */}
+      <span
+        aria-hidden="true"
+        data-pulse=""
+        className="vessel-line animate-vpulse pointer-events-none absolute top-2 bottom-2 left-[13px] -z-10 w-[3px] sm:hidden"
+      />
 
       {steps.map((item) => (
         <li
           key={item.step}
-          className="flex h-full flex-col gap-2 rounded-card border border-white/15 bg-white/5 p-4"
+          className="relative flex h-full flex-col gap-2 rounded-[20px] border border-white/15 bg-white/8 p-4 backdrop-blur-glass"
         >
+          <span aria-hidden="true" className="vessel-node absolute -left-[30px] top-[18px] sm:hidden" />
           <span
             aria-hidden="true"
-            className="flex size-8 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-primary-foreground"
+            className="font-heading text-[11px] font-bold tracking-[1px] text-accent-bright"
           >
             {item.step}
           </span>
```

На phone список стає вертикальним: конектор ліворуч, вузли навпроти карток
(`pl-[34px]` на самому `<ol>`). На sm і вище — сітка з горизонтальною лінією,
вузли ховаються.
