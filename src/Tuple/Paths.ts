import {Paths as OPaths} from '../Object/Paths'

/** Get all the possible paths of **`T`**
 * (⚠️ This won't work on self-references)
 * @param T to be inspected
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
export type Paths<T extends any[]> =
    OPaths<T>
