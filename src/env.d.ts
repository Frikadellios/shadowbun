/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference types="astro/astro-jsx" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>

declare namespace App {
  interface Locals extends Runtime {}
}

interface ImportMetaEnv {
  readonly SKIP_DEPENDENCY_INSTALL: string
  readonly UNSTABLE_PRE_BUILD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type TODO_ANY = any
