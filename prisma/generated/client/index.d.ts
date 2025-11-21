
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model MedicationSchedule
 * 
 */
export type MedicationSchedule = $Result.DefaultSelection<Prisma.$MedicationSchedulePayload>
/**
 * Model MedicationLog
 * 
 */
export type MedicationLog = $Result.DefaultSelection<Prisma.$MedicationLogPayload>
/**
 * Model DailyStreak
 * 
 */
export type DailyStreak = $Result.DefaultSelection<Prisma.$DailyStreakPayload>
/**
 * Model NotificationSubscription
 * 
 */
export type NotificationSubscription = $Result.DefaultSelection<Prisma.$NotificationSubscriptionPayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs>;

  /**
   * `prisma.medicationSchedule`: Exposes CRUD operations for the **MedicationSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicationSchedules
    * const medicationSchedules = await prisma.medicationSchedule.findMany()
    * ```
    */
  get medicationSchedule(): Prisma.MedicationScheduleDelegate<ExtArgs>;

  /**
   * `prisma.medicationLog`: Exposes CRUD operations for the **MedicationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicationLogs
    * const medicationLogs = await prisma.medicationLog.findMany()
    * ```
    */
  get medicationLog(): Prisma.MedicationLogDelegate<ExtArgs>;

  /**
   * `prisma.dailyStreak`: Exposes CRUD operations for the **DailyStreak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyStreaks
    * const dailyStreaks = await prisma.dailyStreak.findMany()
    * ```
    */
  get dailyStreak(): Prisma.DailyStreakDelegate<ExtArgs>;

  /**
   * `prisma.notificationSubscription`: Exposes CRUD operations for the **NotificationSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationSubscriptions
    * const notificationSubscriptions = await prisma.notificationSubscription.findMany()
    * ```
    */
  get notificationSubscription(): Prisma.NotificationSubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Medication: 'Medication',
    MedicationSchedule: 'MedicationSchedule',
    MedicationLog: 'MedicationLog',
    DailyStreak: 'DailyStreak',
    NotificationSubscription: 'NotificationSubscription',
    UserPreferences: 'UserPreferences'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "medication" | "medicationSchedule" | "medicationLog" | "dailyStreak" | "notificationSubscription" | "userPreferences"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      MedicationSchedule: {
        payload: Prisma.$MedicationSchedulePayload<ExtArgs>
        fields: Prisma.MedicationScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          findFirst: {
            args: Prisma.MedicationScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          findMany: {
            args: Prisma.MedicationScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>[]
          }
          create: {
            args: Prisma.MedicationScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          createMany: {
            args: Prisma.MedicationScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>[]
          }
          delete: {
            args: Prisma.MedicationScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          update: {
            args: Prisma.MedicationScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          deleteMany: {
            args: Prisma.MedicationScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicationScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationSchedulePayload>
          }
          aggregate: {
            args: Prisma.MedicationScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicationSchedule>
          }
          groupBy: {
            args: Prisma.MedicationScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationScheduleCountAggregateOutputType> | number
          }
        }
      }
      MedicationLog: {
        payload: Prisma.$MedicationLogPayload<ExtArgs>
        fields: Prisma.MedicationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          findFirst: {
            args: Prisma.MedicationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          findMany: {
            args: Prisma.MedicationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>[]
          }
          create: {
            args: Prisma.MedicationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          createMany: {
            args: Prisma.MedicationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>[]
          }
          delete: {
            args: Prisma.MedicationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          update: {
            args: Prisma.MedicationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          deleteMany: {
            args: Prisma.MedicationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationLogPayload>
          }
          aggregate: {
            args: Prisma.MedicationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicationLog>
          }
          groupBy: {
            args: Prisma.MedicationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationLogCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationLogCountAggregateOutputType> | number
          }
        }
      }
      DailyStreak: {
        payload: Prisma.$DailyStreakPayload<ExtArgs>
        fields: Prisma.DailyStreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyStreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyStreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          findFirst: {
            args: Prisma.DailyStreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyStreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          findMany: {
            args: Prisma.DailyStreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>[]
          }
          create: {
            args: Prisma.DailyStreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          createMany: {
            args: Prisma.DailyStreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyStreakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>[]
          }
          delete: {
            args: Prisma.DailyStreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          update: {
            args: Prisma.DailyStreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          deleteMany: {
            args: Prisma.DailyStreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyStreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyStreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          aggregate: {
            args: Prisma.DailyStreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyStreak>
          }
          groupBy: {
            args: Prisma.DailyStreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyStreakGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyStreakCountArgs<ExtArgs>
            result: $Utils.Optional<DailyStreakCountAggregateOutputType> | number
          }
        }
      }
      NotificationSubscription: {
        payload: Prisma.$NotificationSubscriptionPayload<ExtArgs>
        fields: Prisma.NotificationSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.NotificationSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSubscriptionPayload>
          }
          findMany: {
            args: Prisma.NotificationSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSubscriptionPayload>[]
          }
          create: {
            args: Prisma.NotificationSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSubscriptionPayload>
          }
          createMany: {
            args: Prisma.NotificationSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.NotificationSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSubscriptionPayload>
          }
          update: {
            args: Prisma.NotificationSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.NotificationSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.NotificationSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationSubscription>
          }
          groupBy: {
            args: Prisma.NotificationSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    medications: number
    medicationLogs: number
    dailyStreaks: number
    notificationSubscriptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | UserCountOutputTypeCountMedicationsArgs
    medicationLogs?: boolean | UserCountOutputTypeCountMedicationLogsArgs
    dailyStreaks?: boolean | UserCountOutputTypeCountDailyStreaksArgs
    notificationSubscriptions?: boolean | UserCountOutputTypeCountNotificationSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedicationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyStreaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyStreakWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationSubscriptionWhereInput
  }


  /**
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    schedules: number
    logs: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | MedicationCountOutputTypeCountSchedulesArgs
    logs?: boolean | MedicationCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationScheduleWhereInput
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medications?: boolean | User$medicationsArgs<ExtArgs>
    medicationLogs?: boolean | User$medicationLogsArgs<ExtArgs>
    dailyStreaks?: boolean | User$dailyStreaksArgs<ExtArgs>
    notificationSubscriptions?: boolean | User$notificationSubscriptionsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | User$medicationsArgs<ExtArgs>
    medicationLogs?: boolean | User$medicationLogsArgs<ExtArgs>
    dailyStreaks?: boolean | User$dailyStreaksArgs<ExtArgs>
    notificationSubscriptions?: boolean | User$notificationSubscriptionsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      medications: Prisma.$MedicationPayload<ExtArgs>[]
      medicationLogs: Prisma.$MedicationLogPayload<ExtArgs>[]
      dailyStreaks: Prisma.$DailyStreakPayload<ExtArgs>[]
      notificationSubscriptions: Prisma.$NotificationSubscriptionPayload<ExtArgs>[]
      preferences: Prisma.$UserPreferencesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medications<T extends User$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany"> | Null>
    medicationLogs<T extends User$medicationLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$medicationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findMany"> | Null>
    dailyStreaks<T extends User$dailyStreaksArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyStreaksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findMany"> | Null>
    notificationSubscriptions<T extends User$notificationSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSubscriptionPayload<ExtArgs>, T, "findMany"> | Null>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.medications
   */
  export type User$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * User.medicationLogs
   */
  export type User$medicationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    where?: MedicationLogWhereInput
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    cursor?: MedicationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationLogScalarFieldEnum | MedicationLogScalarFieldEnum[]
  }

  /**
   * User.dailyStreaks
   */
  export type User$dailyStreaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    where?: DailyStreakWhereInput
    orderBy?: DailyStreakOrderByWithRelationInput | DailyStreakOrderByWithRelationInput[]
    cursor?: DailyStreakWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyStreakScalarFieldEnum | DailyStreakScalarFieldEnum[]
  }

  /**
   * User.notificationSubscriptions
   */
  export type User$notificationSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionInclude<ExtArgs> | null
    where?: NotificationSubscriptionWhereInput
    orderBy?: NotificationSubscriptionOrderByWithRelationInput | NotificationSubscriptionOrderByWithRelationInput[]
    cursor?: NotificationSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationSubscriptionScalarFieldEnum | NotificationSubscriptionScalarFieldEnum[]
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationAvgAggregateOutputType = {
    frequency: number | null
  }

  export type MedicationSumAggregateOutputType = {
    frequency: number | null
  }

  export type MedicationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    type: string | null
    dosage: string | null
    frequency: number | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    type: string | null
    dosage: string | null
    frequency: number | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    type: number
    dosage: number
    frequency: number
    isActive: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationAvgAggregateInputType = {
    frequency?: true
  }

  export type MedicationSumAggregateInputType = {
    frequency?: true
  }

  export type MedicationMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    type?: true
    dosage?: true
    frequency?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    type?: true
    dosage?: true
    frequency?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    type?: true
    dosage?: true
    frequency?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _avg?: MedicationAvgAggregateInputType
    _sum?: MedicationSumAggregateInputType
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    type: string
    dosage: string | null
    frequency: number
    isActive: boolean
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    dosage?: boolean
    frequency?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedules?: boolean | Medication$schedulesArgs<ExtArgs>
    logs?: boolean | Medication$logsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    dosage?: boolean
    frequency?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    dosage?: boolean
    frequency?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedules?: boolean | Medication$schedulesArgs<ExtArgs>
    logs?: boolean | Medication$logsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      schedules: Prisma.$MedicationSchedulePayload<ExtArgs>[]
      logs: Prisma.$MedicationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      type: string
      dosage: string | null
      frequency: number
      isActive: boolean
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    schedules<T extends Medication$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Medication$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findMany"> | Null>
    logs<T extends Medication$logsArgs<ExtArgs> = {}>(args?: Subset<T, Medication$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medication model
   */ 
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'String'>
    readonly userId: FieldRef<"Medication", 'String'>
    readonly name: FieldRef<"Medication", 'String'>
    readonly description: FieldRef<"Medication", 'String'>
    readonly type: FieldRef<"Medication", 'String'>
    readonly dosage: FieldRef<"Medication", 'String'>
    readonly frequency: FieldRef<"Medication", 'Int'>
    readonly isActive: FieldRef<"Medication", 'Boolean'>
    readonly startDate: FieldRef<"Medication", 'DateTime'>
    readonly endDate: FieldRef<"Medication", 'DateTime'>
    readonly createdAt: FieldRef<"Medication", 'DateTime'>
    readonly updatedAt: FieldRef<"Medication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
  }

  /**
   * Medication.schedules
   */
  export type Medication$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    where?: MedicationScheduleWhereInput
    orderBy?: MedicationScheduleOrderByWithRelationInput | MedicationScheduleOrderByWithRelationInput[]
    cursor?: MedicationScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScheduleScalarFieldEnum | MedicationScheduleScalarFieldEnum[]
  }

  /**
   * Medication.logs
   */
  export type Medication$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    where?: MedicationLogWhereInput
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    cursor?: MedicationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationLogScalarFieldEnum | MedicationLogScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model MedicationSchedule
   */

  export type AggregateMedicationSchedule = {
    _count: MedicationScheduleCountAggregateOutputType | null
    _avg: MedicationScheduleAvgAggregateOutputType | null
    _sum: MedicationScheduleSumAggregateOutputType | null
    _min: MedicationScheduleMinAggregateOutputType | null
    _max: MedicationScheduleMaxAggregateOutputType | null
  }

  export type MedicationScheduleAvgAggregateOutputType = {
    daysOfWeek: number | null
  }

  export type MedicationScheduleSumAggregateOutputType = {
    daysOfWeek: number[]
  }

  export type MedicationScheduleMinAggregateOutputType = {
    id: string | null
    medicationId: string | null
    timeOfDay: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationScheduleMaxAggregateOutputType = {
    id: string | null
    medicationId: string | null
    timeOfDay: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationScheduleCountAggregateOutputType = {
    id: number
    medicationId: number
    timeOfDay: number
    daysOfWeek: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationScheduleAvgAggregateInputType = {
    daysOfWeek?: true
  }

  export type MedicationScheduleSumAggregateInputType = {
    daysOfWeek?: true
  }

  export type MedicationScheduleMinAggregateInputType = {
    id?: true
    medicationId?: true
    timeOfDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationScheduleMaxAggregateInputType = {
    id?: true
    medicationId?: true
    timeOfDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationScheduleCountAggregateInputType = {
    id?: true
    medicationId?: true
    timeOfDay?: true
    daysOfWeek?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationSchedule to aggregate.
     */
    where?: MedicationScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationSchedules to fetch.
     */
    orderBy?: MedicationScheduleOrderByWithRelationInput | MedicationScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicationSchedules
    **/
    _count?: true | MedicationScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationScheduleMaxAggregateInputType
  }

  export type GetMedicationScheduleAggregateType<T extends MedicationScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicationSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicationSchedule[P]>
      : GetScalarType<T[P], AggregateMedicationSchedule[P]>
  }




  export type MedicationScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationScheduleWhereInput
    orderBy?: MedicationScheduleOrderByWithAggregationInput | MedicationScheduleOrderByWithAggregationInput[]
    by: MedicationScheduleScalarFieldEnum[] | MedicationScheduleScalarFieldEnum
    having?: MedicationScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationScheduleCountAggregateInputType | true
    _avg?: MedicationScheduleAvgAggregateInputType
    _sum?: MedicationScheduleSumAggregateInputType
    _min?: MedicationScheduleMinAggregateInputType
    _max?: MedicationScheduleMaxAggregateInputType
  }

  export type MedicationScheduleGroupByOutputType = {
    id: string
    medicationId: string
    timeOfDay: string
    daysOfWeek: number[]
    createdAt: Date
    updatedAt: Date
    _count: MedicationScheduleCountAggregateOutputType | null
    _avg: MedicationScheduleAvgAggregateOutputType | null
    _sum: MedicationScheduleSumAggregateOutputType | null
    _min: MedicationScheduleMinAggregateOutputType | null
    _max: MedicationScheduleMaxAggregateOutputType | null
  }

  type GetMedicationScheduleGroupByPayload<T extends MedicationScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationScheduleGroupByOutputType[P]>
        }
      >
    >


  export type MedicationScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    timeOfDay?: boolean
    daysOfWeek?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationSchedule"]>

  export type MedicationScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    timeOfDay?: boolean
    daysOfWeek?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationSchedule"]>

  export type MedicationScheduleSelectScalar = {
    id?: boolean
    medicationId?: boolean
    timeOfDay?: boolean
    daysOfWeek?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type MedicationScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $MedicationSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicationSchedule"
    objects: {
      medication: Prisma.$MedicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medicationId: string
      timeOfDay: string
      daysOfWeek: number[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicationSchedule"]>
    composites: {}
  }

  type MedicationScheduleGetPayload<S extends boolean | null | undefined | MedicationScheduleDefaultArgs> = $Result.GetResult<Prisma.$MedicationSchedulePayload, S>

  type MedicationScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicationScheduleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicationScheduleCountAggregateInputType | true
    }

  export interface MedicationScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicationSchedule'], meta: { name: 'MedicationSchedule' } }
    /**
     * Find zero or one MedicationSchedule that matches the filter.
     * @param {MedicationScheduleFindUniqueArgs} args - Arguments to find a MedicationSchedule
     * @example
     * // Get one MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationScheduleFindUniqueArgs>(args: SelectSubset<T, MedicationScheduleFindUniqueArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MedicationSchedule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicationScheduleFindUniqueOrThrowArgs} args - Arguments to find a MedicationSchedule
     * @example
     * // Get one MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MedicationSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleFindFirstArgs} args - Arguments to find a MedicationSchedule
     * @example
     * // Get one MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationScheduleFindFirstArgs>(args?: SelectSubset<T, MedicationScheduleFindFirstArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MedicationSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleFindFirstOrThrowArgs} args - Arguments to find a MedicationSchedule
     * @example
     * // Get one MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MedicationSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicationSchedules
     * const medicationSchedules = await prisma.medicationSchedule.findMany()
     * 
     * // Get first 10 MedicationSchedules
     * const medicationSchedules = await prisma.medicationSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationScheduleWithIdOnly = await prisma.medicationSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationScheduleFindManyArgs>(args?: SelectSubset<T, MedicationScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MedicationSchedule.
     * @param {MedicationScheduleCreateArgs} args - Arguments to create a MedicationSchedule.
     * @example
     * // Create one MedicationSchedule
     * const MedicationSchedule = await prisma.medicationSchedule.create({
     *   data: {
     *     // ... data to create a MedicationSchedule
     *   }
     * })
     * 
     */
    create<T extends MedicationScheduleCreateArgs>(args: SelectSubset<T, MedicationScheduleCreateArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MedicationSchedules.
     * @param {MedicationScheduleCreateManyArgs} args - Arguments to create many MedicationSchedules.
     * @example
     * // Create many MedicationSchedules
     * const medicationSchedule = await prisma.medicationSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationScheduleCreateManyArgs>(args?: SelectSubset<T, MedicationScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicationSchedules and returns the data saved in the database.
     * @param {MedicationScheduleCreateManyAndReturnArgs} args - Arguments to create many MedicationSchedules.
     * @example
     * // Create many MedicationSchedules
     * const medicationSchedule = await prisma.medicationSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicationSchedules and only return the `id`
     * const medicationScheduleWithIdOnly = await prisma.medicationSchedule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MedicationSchedule.
     * @param {MedicationScheduleDeleteArgs} args - Arguments to delete one MedicationSchedule.
     * @example
     * // Delete one MedicationSchedule
     * const MedicationSchedule = await prisma.medicationSchedule.delete({
     *   where: {
     *     // ... filter to delete one MedicationSchedule
     *   }
     * })
     * 
     */
    delete<T extends MedicationScheduleDeleteArgs>(args: SelectSubset<T, MedicationScheduleDeleteArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MedicationSchedule.
     * @param {MedicationScheduleUpdateArgs} args - Arguments to update one MedicationSchedule.
     * @example
     * // Update one MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationScheduleUpdateArgs>(args: SelectSubset<T, MedicationScheduleUpdateArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MedicationSchedules.
     * @param {MedicationScheduleDeleteManyArgs} args - Arguments to filter MedicationSchedules to delete.
     * @example
     * // Delete a few MedicationSchedules
     * const { count } = await prisma.medicationSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationScheduleDeleteManyArgs>(args?: SelectSubset<T, MedicationScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicationSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicationSchedules
     * const medicationSchedule = await prisma.medicationSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationScheduleUpdateManyArgs>(args: SelectSubset<T, MedicationScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicationSchedule.
     * @param {MedicationScheduleUpsertArgs} args - Arguments to update or create a MedicationSchedule.
     * @example
     * // Update or create a MedicationSchedule
     * const medicationSchedule = await prisma.medicationSchedule.upsert({
     *   create: {
     *     // ... data to create a MedicationSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicationSchedule we want to update
     *   }
     * })
     */
    upsert<T extends MedicationScheduleUpsertArgs>(args: SelectSubset<T, MedicationScheduleUpsertArgs<ExtArgs>>): Prisma__MedicationScheduleClient<$Result.GetResult<Prisma.$MedicationSchedulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MedicationSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleCountArgs} args - Arguments to filter MedicationSchedules to count.
     * @example
     * // Count the number of MedicationSchedules
     * const count = await prisma.medicationSchedule.count({
     *   where: {
     *     // ... the filter for the MedicationSchedules we want to count
     *   }
     * })
    **/
    count<T extends MedicationScheduleCountArgs>(
      args?: Subset<T, MedicationScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicationSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicationScheduleAggregateArgs>(args: Subset<T, MedicationScheduleAggregateArgs>): Prisma.PrismaPromise<GetMedicationScheduleAggregateType<T>>

    /**
     * Group by MedicationSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicationScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationScheduleGroupByArgs['orderBy'] }
        : { orderBy?: MedicationScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicationScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicationSchedule model
   */
  readonly fields: MedicationScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicationSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicationSchedule model
   */ 
  interface MedicationScheduleFieldRefs {
    readonly id: FieldRef<"MedicationSchedule", 'String'>
    readonly medicationId: FieldRef<"MedicationSchedule", 'String'>
    readonly timeOfDay: FieldRef<"MedicationSchedule", 'String'>
    readonly daysOfWeek: FieldRef<"MedicationSchedule", 'Int[]'>
    readonly createdAt: FieldRef<"MedicationSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicationSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicationSchedule findUnique
   */
  export type MedicationScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MedicationSchedule to fetch.
     */
    where: MedicationScheduleWhereUniqueInput
  }

  /**
   * MedicationSchedule findUniqueOrThrow
   */
  export type MedicationScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MedicationSchedule to fetch.
     */
    where: MedicationScheduleWhereUniqueInput
  }

  /**
   * MedicationSchedule findFirst
   */
  export type MedicationScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MedicationSchedule to fetch.
     */
    where?: MedicationScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationSchedules to fetch.
     */
    orderBy?: MedicationScheduleOrderByWithRelationInput | MedicationScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationSchedules.
     */
    cursor?: MedicationScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationSchedules.
     */
    distinct?: MedicationScheduleScalarFieldEnum | MedicationScheduleScalarFieldEnum[]
  }

  /**
   * MedicationSchedule findFirstOrThrow
   */
  export type MedicationScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MedicationSchedule to fetch.
     */
    where?: MedicationScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationSchedules to fetch.
     */
    orderBy?: MedicationScheduleOrderByWithRelationInput | MedicationScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationSchedules.
     */
    cursor?: MedicationScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationSchedules.
     */
    distinct?: MedicationScheduleScalarFieldEnum | MedicationScheduleScalarFieldEnum[]
  }

  /**
   * MedicationSchedule findMany
   */
  export type MedicationScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MedicationSchedules to fetch.
     */
    where?: MedicationScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationSchedules to fetch.
     */
    orderBy?: MedicationScheduleOrderByWithRelationInput | MedicationScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicationSchedules.
     */
    cursor?: MedicationScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationSchedules.
     */
    skip?: number
    distinct?: MedicationScheduleScalarFieldEnum | MedicationScheduleScalarFieldEnum[]
  }

  /**
   * MedicationSchedule create
   */
  export type MedicationScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicationSchedule.
     */
    data: XOR<MedicationScheduleCreateInput, MedicationScheduleUncheckedCreateInput>
  }

  /**
   * MedicationSchedule createMany
   */
  export type MedicationScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicationSchedules.
     */
    data: MedicationScheduleCreateManyInput | MedicationScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicationSchedule createManyAndReturn
   */
  export type MedicationScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MedicationSchedules.
     */
    data: MedicationScheduleCreateManyInput | MedicationScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicationSchedule update
   */
  export type MedicationScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicationSchedule.
     */
    data: XOR<MedicationScheduleUpdateInput, MedicationScheduleUncheckedUpdateInput>
    /**
     * Choose, which MedicationSchedule to update.
     */
    where: MedicationScheduleWhereUniqueInput
  }

  /**
   * MedicationSchedule updateMany
   */
  export type MedicationScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicationSchedules.
     */
    data: XOR<MedicationScheduleUpdateManyMutationInput, MedicationScheduleUncheckedUpdateManyInput>
    /**
     * Filter which MedicationSchedules to update
     */
    where?: MedicationScheduleWhereInput
  }

  /**
   * MedicationSchedule upsert
   */
  export type MedicationScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicationSchedule to update in case it exists.
     */
    where: MedicationScheduleWhereUniqueInput
    /**
     * In case the MedicationSchedule found by the `where` argument doesn't exist, create a new MedicationSchedule with this data.
     */
    create: XOR<MedicationScheduleCreateInput, MedicationScheduleUncheckedCreateInput>
    /**
     * In case the MedicationSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationScheduleUpdateInput, MedicationScheduleUncheckedUpdateInput>
  }

  /**
   * MedicationSchedule delete
   */
  export type MedicationScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
    /**
     * Filter which MedicationSchedule to delete.
     */
    where: MedicationScheduleWhereUniqueInput
  }

  /**
   * MedicationSchedule deleteMany
   */
  export type MedicationScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationSchedules to delete
     */
    where?: MedicationScheduleWhereInput
  }

  /**
   * MedicationSchedule without action
   */
  export type MedicationScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationSchedule
     */
    select?: MedicationScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationScheduleInclude<ExtArgs> | null
  }


  /**
   * Model MedicationLog
   */

  export type AggregateMedicationLog = {
    _count: MedicationLogCountAggregateOutputType | null
    _min: MedicationLogMinAggregateOutputType | null
    _max: MedicationLogMaxAggregateOutputType | null
  }

  export type MedicationLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    medicationId: string | null
    scheduledTime: Date | null
    takenAt: Date | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    medicationId: string | null
    scheduledTime: Date | null
    takenAt: Date | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationLogCountAggregateOutputType = {
    id: number
    userId: number
    medicationId: number
    scheduledTime: number
    takenAt: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationLogMinAggregateInputType = {
    id?: true
    userId?: true
    medicationId?: true
    scheduledTime?: true
    takenAt?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationLogMaxAggregateInputType = {
    id?: true
    userId?: true
    medicationId?: true
    scheduledTime?: true
    takenAt?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationLogCountAggregateInputType = {
    id?: true
    userId?: true
    medicationId?: true
    scheduledTime?: true
    takenAt?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationLog to aggregate.
     */
    where?: MedicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationLogs to fetch.
     */
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicationLogs
    **/
    _count?: true | MedicationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationLogMaxAggregateInputType
  }

  export type GetMedicationLogAggregateType<T extends MedicationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicationLog[P]>
      : GetScalarType<T[P], AggregateMedicationLog[P]>
  }




  export type MedicationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationLogWhereInput
    orderBy?: MedicationLogOrderByWithAggregationInput | MedicationLogOrderByWithAggregationInput[]
    by: MedicationLogScalarFieldEnum[] | MedicationLogScalarFieldEnum
    having?: MedicationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationLogCountAggregateInputType | true
    _min?: MedicationLogMinAggregateInputType
    _max?: MedicationLogMaxAggregateInputType
  }

  export type MedicationLogGroupByOutputType = {
    id: string
    userId: string
    medicationId: string
    scheduledTime: Date
    takenAt: Date | null
    status: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MedicationLogCountAggregateOutputType | null
    _min: MedicationLogMinAggregateOutputType | null
    _max: MedicationLogMaxAggregateOutputType | null
  }

  type GetMedicationLogGroupByPayload<T extends MedicationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationLogGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationLogGroupByOutputType[P]>
        }
      >
    >


  export type MedicationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    medicationId?: boolean
    scheduledTime?: boolean
    takenAt?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationLog"]>

  export type MedicationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    medicationId?: boolean
    scheduledTime?: boolean
    takenAt?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationLog"]>

  export type MedicationLogSelectScalar = {
    id?: boolean
    userId?: boolean
    medicationId?: boolean
    scheduledTime?: boolean
    takenAt?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type MedicationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $MedicationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicationLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      medication: Prisma.$MedicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      medicationId: string
      scheduledTime: Date
      takenAt: Date | null
      status: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicationLog"]>
    composites: {}
  }

  type MedicationLogGetPayload<S extends boolean | null | undefined | MedicationLogDefaultArgs> = $Result.GetResult<Prisma.$MedicationLogPayload, S>

  type MedicationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicationLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicationLogCountAggregateInputType | true
    }

  export interface MedicationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicationLog'], meta: { name: 'MedicationLog' } }
    /**
     * Find zero or one MedicationLog that matches the filter.
     * @param {MedicationLogFindUniqueArgs} args - Arguments to find a MedicationLog
     * @example
     * // Get one MedicationLog
     * const medicationLog = await prisma.medicationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationLogFindUniqueArgs>(args: SelectSubset<T, MedicationLogFindUniqueArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MedicationLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicationLogFindUniqueOrThrowArgs} args - Arguments to find a MedicationLog
     * @example
     * // Get one MedicationLog
     * const medicationLog = await prisma.medicationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MedicationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogFindFirstArgs} args - Arguments to find a MedicationLog
     * @example
     * // Get one MedicationLog
     * const medicationLog = await prisma.medicationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationLogFindFirstArgs>(args?: SelectSubset<T, MedicationLogFindFirstArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MedicationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogFindFirstOrThrowArgs} args - Arguments to find a MedicationLog
     * @example
     * // Get one MedicationLog
     * const medicationLog = await prisma.medicationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MedicationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicationLogs
     * const medicationLogs = await prisma.medicationLog.findMany()
     * 
     * // Get first 10 MedicationLogs
     * const medicationLogs = await prisma.medicationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationLogWithIdOnly = await prisma.medicationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationLogFindManyArgs>(args?: SelectSubset<T, MedicationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MedicationLog.
     * @param {MedicationLogCreateArgs} args - Arguments to create a MedicationLog.
     * @example
     * // Create one MedicationLog
     * const MedicationLog = await prisma.medicationLog.create({
     *   data: {
     *     // ... data to create a MedicationLog
     *   }
     * })
     * 
     */
    create<T extends MedicationLogCreateArgs>(args: SelectSubset<T, MedicationLogCreateArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MedicationLogs.
     * @param {MedicationLogCreateManyArgs} args - Arguments to create many MedicationLogs.
     * @example
     * // Create many MedicationLogs
     * const medicationLog = await prisma.medicationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationLogCreateManyArgs>(args?: SelectSubset<T, MedicationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicationLogs and returns the data saved in the database.
     * @param {MedicationLogCreateManyAndReturnArgs} args - Arguments to create many MedicationLogs.
     * @example
     * // Create many MedicationLogs
     * const medicationLog = await prisma.medicationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicationLogs and only return the `id`
     * const medicationLogWithIdOnly = await prisma.medicationLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MedicationLog.
     * @param {MedicationLogDeleteArgs} args - Arguments to delete one MedicationLog.
     * @example
     * // Delete one MedicationLog
     * const MedicationLog = await prisma.medicationLog.delete({
     *   where: {
     *     // ... filter to delete one MedicationLog
     *   }
     * })
     * 
     */
    delete<T extends MedicationLogDeleteArgs>(args: SelectSubset<T, MedicationLogDeleteArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MedicationLog.
     * @param {MedicationLogUpdateArgs} args - Arguments to update one MedicationLog.
     * @example
     * // Update one MedicationLog
     * const medicationLog = await prisma.medicationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationLogUpdateArgs>(args: SelectSubset<T, MedicationLogUpdateArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MedicationLogs.
     * @param {MedicationLogDeleteManyArgs} args - Arguments to filter MedicationLogs to delete.
     * @example
     * // Delete a few MedicationLogs
     * const { count } = await prisma.medicationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationLogDeleteManyArgs>(args?: SelectSubset<T, MedicationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicationLogs
     * const medicationLog = await prisma.medicationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationLogUpdateManyArgs>(args: SelectSubset<T, MedicationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicationLog.
     * @param {MedicationLogUpsertArgs} args - Arguments to update or create a MedicationLog.
     * @example
     * // Update or create a MedicationLog
     * const medicationLog = await prisma.medicationLog.upsert({
     *   create: {
     *     // ... data to create a MedicationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicationLog we want to update
     *   }
     * })
     */
    upsert<T extends MedicationLogUpsertArgs>(args: SelectSubset<T, MedicationLogUpsertArgs<ExtArgs>>): Prisma__MedicationLogClient<$Result.GetResult<Prisma.$MedicationLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MedicationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogCountArgs} args - Arguments to filter MedicationLogs to count.
     * @example
     * // Count the number of MedicationLogs
     * const count = await prisma.medicationLog.count({
     *   where: {
     *     // ... the filter for the MedicationLogs we want to count
     *   }
     * })
    **/
    count<T extends MedicationLogCountArgs>(
      args?: Subset<T, MedicationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicationLogAggregateArgs>(args: Subset<T, MedicationLogAggregateArgs>): Prisma.PrismaPromise<GetMedicationLogAggregateType<T>>

    /**
     * Group by MedicationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationLogGroupByArgs['orderBy'] }
        : { orderBy?: MedicationLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicationLog model
   */
  readonly fields: MedicationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicationLog model
   */ 
  interface MedicationLogFieldRefs {
    readonly id: FieldRef<"MedicationLog", 'String'>
    readonly userId: FieldRef<"MedicationLog", 'String'>
    readonly medicationId: FieldRef<"MedicationLog", 'String'>
    readonly scheduledTime: FieldRef<"MedicationLog", 'DateTime'>
    readonly takenAt: FieldRef<"MedicationLog", 'DateTime'>
    readonly status: FieldRef<"MedicationLog", 'String'>
    readonly notes: FieldRef<"MedicationLog", 'String'>
    readonly createdAt: FieldRef<"MedicationLog", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicationLog findUnique
   */
  export type MedicationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter, which MedicationLog to fetch.
     */
    where: MedicationLogWhereUniqueInput
  }

  /**
   * MedicationLog findUniqueOrThrow
   */
  export type MedicationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter, which MedicationLog to fetch.
     */
    where: MedicationLogWhereUniqueInput
  }

  /**
   * MedicationLog findFirst
   */
  export type MedicationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter, which MedicationLog to fetch.
     */
    where?: MedicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationLogs to fetch.
     */
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationLogs.
     */
    cursor?: MedicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationLogs.
     */
    distinct?: MedicationLogScalarFieldEnum | MedicationLogScalarFieldEnum[]
  }

  /**
   * MedicationLog findFirstOrThrow
   */
  export type MedicationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter, which MedicationLog to fetch.
     */
    where?: MedicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationLogs to fetch.
     */
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationLogs.
     */
    cursor?: MedicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationLogs.
     */
    distinct?: MedicationLogScalarFieldEnum | MedicationLogScalarFieldEnum[]
  }

  /**
   * MedicationLog findMany
   */
  export type MedicationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter, which MedicationLogs to fetch.
     */
    where?: MedicationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationLogs to fetch.
     */
    orderBy?: MedicationLogOrderByWithRelationInput | MedicationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicationLogs.
     */
    cursor?: MedicationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationLogs.
     */
    skip?: number
    distinct?: MedicationLogScalarFieldEnum | MedicationLogScalarFieldEnum[]
  }

  /**
   * MedicationLog create
   */
  export type MedicationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicationLog.
     */
    data: XOR<MedicationLogCreateInput, MedicationLogUncheckedCreateInput>
  }

  /**
   * MedicationLog createMany
   */
  export type MedicationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicationLogs.
     */
    data: MedicationLogCreateManyInput | MedicationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicationLog createManyAndReturn
   */
  export type MedicationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MedicationLogs.
     */
    data: MedicationLogCreateManyInput | MedicationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicationLog update
   */
  export type MedicationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicationLog.
     */
    data: XOR<MedicationLogUpdateInput, MedicationLogUncheckedUpdateInput>
    /**
     * Choose, which MedicationLog to update.
     */
    where: MedicationLogWhereUniqueInput
  }

  /**
   * MedicationLog updateMany
   */
  export type MedicationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicationLogs.
     */
    data: XOR<MedicationLogUpdateManyMutationInput, MedicationLogUncheckedUpdateManyInput>
    /**
     * Filter which MedicationLogs to update
     */
    where?: MedicationLogWhereInput
  }

  /**
   * MedicationLog upsert
   */
  export type MedicationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicationLog to update in case it exists.
     */
    where: MedicationLogWhereUniqueInput
    /**
     * In case the MedicationLog found by the `where` argument doesn't exist, create a new MedicationLog with this data.
     */
    create: XOR<MedicationLogCreateInput, MedicationLogUncheckedCreateInput>
    /**
     * In case the MedicationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationLogUpdateInput, MedicationLogUncheckedUpdateInput>
  }

  /**
   * MedicationLog delete
   */
  export type MedicationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
    /**
     * Filter which MedicationLog to delete.
     */
    where: MedicationLogWhereUniqueInput
  }

  /**
   * MedicationLog deleteMany
   */
  export type MedicationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationLogs to delete
     */
    where?: MedicationLogWhereInput
  }

  /**
   * MedicationLog without action
   */
  export type MedicationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationLog
     */
    select?: MedicationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationLogInclude<ExtArgs> | null
  }


  /**
   * Model DailyStreak
   */

  export type AggregateDailyStreak = {
    _count: DailyStreakCountAggregateOutputType | null
    _avg: DailyStreakAvgAggregateOutputType | null
    _sum: DailyStreakSumAggregateOutputType | null
    _min: DailyStreakMinAggregateOutputType | null
    _max: DailyStreakMaxAggregateOutputType | null
  }

  export type DailyStreakAvgAggregateOutputType = {
    totalDoses: number | null
    completedDoses: number | null
    missedDoses: number | null
  }

  export type DailyStreakSumAggregateOutputType = {
    totalDoses: number | null
    completedDoses: number | null
    missedDoses: number | null
  }

  export type DailyStreakMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    totalDoses: number | null
    completedDoses: number | null
    missedDoses: number | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyStreakMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    totalDoses: number | null
    completedDoses: number | null
    missedDoses: number | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyStreakCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    totalDoses: number
    completedDoses: number
    missedDoses: number
    isCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyStreakAvgAggregateInputType = {
    totalDoses?: true
    completedDoses?: true
    missedDoses?: true
  }

  export type DailyStreakSumAggregateInputType = {
    totalDoses?: true
    completedDoses?: true
    missedDoses?: true
  }

  export type DailyStreakMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    totalDoses?: true
    completedDoses?: true
    missedDoses?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyStreakMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    totalDoses?: true
    completedDoses?: true
    missedDoses?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyStreakCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    totalDoses?: true
    completedDoses?: true
    missedDoses?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyStreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyStreak to aggregate.
     */
    where?: DailyStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStreaks to fetch.
     */
    orderBy?: DailyStreakOrderByWithRelationInput | DailyStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyStreaks
    **/
    _count?: true | DailyStreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyStreakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyStreakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyStreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyStreakMaxAggregateInputType
  }

  export type GetDailyStreakAggregateType<T extends DailyStreakAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyStreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyStreak[P]>
      : GetScalarType<T[P], AggregateDailyStreak[P]>
  }




  export type DailyStreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyStreakWhereInput
    orderBy?: DailyStreakOrderByWithAggregationInput | DailyStreakOrderByWithAggregationInput[]
    by: DailyStreakScalarFieldEnum[] | DailyStreakScalarFieldEnum
    having?: DailyStreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyStreakCountAggregateInputType | true
    _avg?: DailyStreakAvgAggregateInputType
    _sum?: DailyStreakSumAggregateInputType
    _min?: DailyStreakMinAggregateInputType
    _max?: DailyStreakMaxAggregateInputType
  }

  export type DailyStreakGroupByOutputType = {
    id: string
    userId: string
    date: Date
    totalDoses: number
    completedDoses: number
    missedDoses: number
    isCompleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: DailyStreakCountAggregateOutputType | null
    _avg: DailyStreakAvgAggregateOutputType | null
    _sum: DailyStreakSumAggregateOutputType | null
    _min: DailyStreakMinAggregateOutputType | null
    _max: DailyStreakMaxAggregateOutputType | null
  }

  type GetDailyStreakGroupByPayload<T extends DailyStreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyStreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyStreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyStreakGroupByOutputType[P]>
            : GetScalarType<T[P], DailyStreakGroupByOutputType[P]>
        }
      >
    >


  export type DailyStreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    totalDoses?: boolean
    completedDoses?: boolean
    missedDoses?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyStreak"]>

  export type DailyStreakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    totalDoses?: boolean
    completedDoses?: boolean
    missedDoses?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyStreak"]>

  export type DailyStreakSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    totalDoses?: boolean
    completedDoses?: boolean
    missedDoses?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyStreakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyStreakIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyStreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyStreak"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      totalDoses: number
      completedDoses: number
      missedDoses: number
      isCompleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyStreak"]>
    composites: {}
  }

  type DailyStreakGetPayload<S extends boolean | null | undefined | DailyStreakDefaultArgs> = $Result.GetResult<Prisma.$DailyStreakPayload, S>

  type DailyStreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyStreakFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyStreakCountAggregateInputType | true
    }

  export interface DailyStreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyStreak'], meta: { name: 'DailyStreak' } }
    /**
     * Find zero or one DailyStreak that matches the filter.
     * @param {DailyStreakFindUniqueArgs} args - Arguments to find a DailyStreak
     * @example
     * // Get one DailyStreak
     * const dailyStreak = await prisma.dailyStreak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyStreakFindUniqueArgs>(args: SelectSubset<T, DailyStreakFindUniqueArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyStreak that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyStreakFindUniqueOrThrowArgs} args - Arguments to find a DailyStreak
     * @example
     * // Get one DailyStreak
     * const dailyStreak = await prisma.dailyStreak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyStreakFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyStreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyStreak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakFindFirstArgs} args - Arguments to find a DailyStreak
     * @example
     * // Get one DailyStreak
     * const dailyStreak = await prisma.dailyStreak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyStreakFindFirstArgs>(args?: SelectSubset<T, DailyStreakFindFirstArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyStreak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakFindFirstOrThrowArgs} args - Arguments to find a DailyStreak
     * @example
     * // Get one DailyStreak
     * const dailyStreak = await prisma.dailyStreak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyStreakFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyStreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyStreaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyStreaks
     * const dailyStreaks = await prisma.dailyStreak.findMany()
     * 
     * // Get first 10 DailyStreaks
     * const dailyStreaks = await prisma.dailyStreak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyStreakWithIdOnly = await prisma.dailyStreak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyStreakFindManyArgs>(args?: SelectSubset<T, DailyStreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyStreak.
     * @param {DailyStreakCreateArgs} args - Arguments to create a DailyStreak.
     * @example
     * // Create one DailyStreak
     * const DailyStreak = await prisma.dailyStreak.create({
     *   data: {
     *     // ... data to create a DailyStreak
     *   }
     * })
     * 
     */
    create<T extends DailyStreakCreateArgs>(args: SelectSubset<T, DailyStreakCreateArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyStreaks.
     * @param {DailyStreakCreateManyArgs} args - Arguments to create many DailyStreaks.
     * @example
     * // Create many DailyStreaks
     * const dailyStreak = await prisma.dailyStreak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyStreakCreateManyArgs>(args?: SelectSubset<T, DailyStreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyStreaks and returns the data saved in the database.
     * @param {DailyStreakCreateManyAndReturnArgs} args - Arguments to create many DailyStreaks.
     * @example
     * // Create many DailyStreaks
     * const dailyStreak = await prisma.dailyStreak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyStreaks and only return the `id`
     * const dailyStreakWithIdOnly = await prisma.dailyStreak.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyStreakCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyStreakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyStreak.
     * @param {DailyStreakDeleteArgs} args - Arguments to delete one DailyStreak.
     * @example
     * // Delete one DailyStreak
     * const DailyStreak = await prisma.dailyStreak.delete({
     *   where: {
     *     // ... filter to delete one DailyStreak
     *   }
     * })
     * 
     */
    delete<T extends DailyStreakDeleteArgs>(args: SelectSubset<T, DailyStreakDeleteArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyStreak.
     * @param {DailyStreakUpdateArgs} args - Arguments to update one DailyStreak.
     * @example
     * // Update one DailyStreak
     * const dailyStreak = await prisma.dailyStreak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyStreakUpdateArgs>(args: SelectSubset<T, DailyStreakUpdateArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyStreaks.
     * @param {DailyStreakDeleteManyArgs} args - Arguments to filter DailyStreaks to delete.
     * @example
     * // Delete a few DailyStreaks
     * const { count } = await prisma.dailyStreak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyStreakDeleteManyArgs>(args?: SelectSubset<T, DailyStreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyStreaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyStreaks
     * const dailyStreak = await prisma.dailyStreak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyStreakUpdateManyArgs>(args: SelectSubset<T, DailyStreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyStreak.
     * @param {DailyStreakUpsertArgs} args - Arguments to update or create a DailyStreak.
     * @example
     * // Update or create a DailyStreak
     * const dailyStreak = await prisma.dailyStreak.upsert({
     *   create: {
     *     // ... data to create a DailyStreak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyStreak we want to update
     *   }
     * })
     */
    upsert<T extends DailyStreakUpsertArgs>(args: SelectSubset<T, DailyStreakUpsertArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyStreaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakCountArgs} args - Arguments to filter DailyStreaks to count.
     * @example
     * // Count the number of DailyStreaks
     * const count = await prisma.dailyStreak.count({
     *   where: {
     *     // ... the filter for the DailyStreaks we want to count
     *   }
     * })
    **/
    count<T extends DailyStreakCountArgs>(
      args?: Subset<T, DailyStreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyStreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyStreak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyStreakAggregateArgs>(args: Subset<T, DailyStreakAggregateArgs>): Prisma.PrismaPromise<GetDailyStreakAggregateType<T>>

    /**
     * Group by DailyStreak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyStreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyStreakGroupByArgs['orderBy'] }
        : { orderBy?: DailyStreakGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyStreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyStreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyStreak model
   */
  readonly fields: DailyStreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyStreak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyStreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyStreak model
   */ 
  interface DailyStreakFieldRefs {
    readonly id: FieldRef<"DailyStreak", 'String'>
    readonly userId: FieldRef<"DailyStreak", 'String'>
    readonly date: FieldRef<"DailyStreak", 'DateTime'>
    readonly totalDoses: FieldRef<"DailyStreak", 'Int'>
    readonly completedDoses: FieldRef<"DailyStreak", 'Int'>
    readonly missedDoses: FieldRef<"DailyStreak", 'Int'>
    readonly isCompleted: FieldRef<"DailyStreak", 'Boolean'>
    readonly createdAt: FieldRef<"DailyStreak", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyStreak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyStreak findUnique
   */
  export type DailyStreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter, which DailyStreak to fetch.
     */
    where: DailyStreakWhereUniqueInput
  }

  /**
   * DailyStreak findUniqueOrThrow
   */
  export type DailyStreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter, which DailyStreak to fetch.
     */
    where: DailyStreakWhereUniqueInput
  }

  /**
   * DailyStreak findFirst
   */
  export type DailyStreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter, which DailyStreak to fetch.
     */
    where?: DailyStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStreaks to fetch.
     */
    orderBy?: DailyStreakOrderByWithRelationInput | DailyStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyStreaks.
     */
    cursor?: DailyStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyStreaks.
     */
    distinct?: DailyStreakScalarFieldEnum | DailyStreakScalarFieldEnum[]
  }

  /**
   * DailyStreak findFirstOrThrow
   */
  export type DailyStreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter, which DailyStreak to fetch.
     */
    where?: DailyStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStreaks to fetch.
     */
    orderBy?: DailyStreakOrderByWithRelationInput | DailyStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyStreaks.
     */
    cursor?: DailyStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyStreaks.
     */
    distinct?: DailyStreakScalarFieldEnum | DailyStreakScalarFieldEnum[]
  }

  /**
   * DailyStreak findMany
   */
  export type DailyStreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter, which DailyStreaks to fetch.
     */
    where?: DailyStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStreaks to fetch.
     */
    orderBy?: DailyStreakOrderByWithRelationInput | DailyStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyStreaks.
     */
    cursor?: DailyStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStreaks.
     */
    skip?: number
    distinct?: DailyStreakScalarFieldEnum | DailyStreakScalarFieldEnum[]
  }

  /**
   * DailyStreak create
   */
  export type DailyStreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyStreak.
     */
    data: XOR<DailyStreakCreateInput, DailyStreakUncheckedCreateInput>
  }

  /**
   * DailyStreak createMany
   */
  export type DailyStreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyStreaks.
     */
    data: DailyStreakCreateManyInput | DailyStreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyStreak createManyAndReturn
   */
  export type DailyStreakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyStreaks.
     */
    data: DailyStreakCreateManyInput | DailyStreakCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyStreak update
   */
  export type DailyStreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyStreak.
     */
    data: XOR<DailyStreakUpdateInput, DailyStreakUncheckedUpdateInput>
    /**
     * Choose, which DailyStreak to update.
     */
    where: DailyStreakWhereUniqueInput
  }

  /**
   * DailyStreak updateMany
   */
  export type DailyStreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyStreaks.
     */
    data: XOR<DailyStreakUpdateManyMutationInput, DailyStreakUncheckedUpdateManyInput>
    /**
     * Filter which DailyStreaks to update
     */
    where?: DailyStreakWhereInput
  }

  /**
   * DailyStreak upsert
   */
  export type DailyStreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyStreak to update in case it exists.
     */
    where: DailyStreakWhereUniqueInput
    /**
     * In case the DailyStreak found by the `where` argument doesn't exist, create a new DailyStreak with this data.
     */
    create: XOR<DailyStreakCreateInput, DailyStreakUncheckedCreateInput>
    /**
     * In case the DailyStreak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyStreakUpdateInput, DailyStreakUncheckedUpdateInput>
  }

  /**
   * DailyStreak delete
   */
  export type DailyStreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter which DailyStreak to delete.
     */
    where: DailyStreakWhereUniqueInput
  }

  /**
   * DailyStreak deleteMany
   */
  export type DailyStreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyStreaks to delete
     */
    where?: DailyStreakWhereInput
  }

  /**
   * DailyStreak without action
   */
  export type DailyStreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
  }


  /**
   * Model NotificationSubscription
   */

  export type AggregateNotificationSubscription = {
    _count: NotificationSubscriptionCountAggregateOutputType | null
    _min: NotificationSubscriptionMinAggregateOutputType | null
    _max: NotificationSubscriptionMaxAggregateOutputType | null
  }

  export type NotificationSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    endpoint: number
    p256dh: number
    auth: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSubscription to aggregate.
     */
    where?: NotificationSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSubscriptions to fetch.
     */
    orderBy?: NotificationSubscriptionOrderByWithRelationInput | NotificationSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationSubscriptions
    **/
    _count?: true | NotificationSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationSubscriptionMaxAggregateInputType
  }

  export type GetNotificationSubscriptionAggregateType<T extends NotificationSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationSubscription[P]>
      : GetScalarType<T[P], AggregateNotificationSubscription[P]>
  }




  export type NotificationSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationSubscriptionWhereInput
    orderBy?: NotificationSubscriptionOrderByWithAggregationInput | NotificationSubscriptionOrderByWithAggregationInput[]
    by: NotificationSubscriptionScalarFieldEnum[] | NotificationSubscriptionScalarFieldEnum
    having?: NotificationSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationSubscriptionCountAggregateInputType | true
    _min?: NotificationSubscriptionMinAggregateInputType
    _max?: NotificationSubscriptionMaxAggregateInputType
  }

  export type NotificationSubscriptionGroupByOutputType = {
    id: string
    userId: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt: Date
    updatedAt: Date
    _count: NotificationSubscriptionCountAggregateOutputType | null
    _min: NotificationSubscriptionMinAggregateOutputType | null
    _max: NotificationSubscriptionMaxAggregateOutputType | null
  }

  type GetNotificationSubscriptionGroupByPayload<T extends NotificationSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSubscription"]>

  export type NotificationSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSubscription"]>

  export type NotificationSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      endpoint: string
      p256dh: string
      auth: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificationSubscription"]>
    composites: {}
  }

  type NotificationSubscriptionGetPayload<S extends boolean | null | undefined | NotificationSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$NotificationSubscriptionPayload, S>

  type NotificationSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationSubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationSubscriptionCountAggregateInputType | true
    }

  export interface NotificationSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationSubscription'], meta: { name: 'NotificationSubscription' } }
    /**
     * Find zero or one NotificationSubscription that matches the filter.
     * @param {NotificationSubscriptionFindUniqueArgs} args - Arguments to find a NotificationSubscription
     * @example
     * // Get one NotificationSubscription
     * const notificationSubscription = await prisma.notificationSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationSubscriptionFindUniqueArgs>(args: SelectSubset<T, NotificationSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__NotificationSubscriptionClient<$Result.GetResult<Prisma.$NotificationSubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NotificationSubscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a NotificationSubscription
     * @example
     * // Get one NotificationSubscription
     * const notificationSubscription = await prisma.notificationSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationSubscriptionClient<$Result.GetResult<Prisma.$NotificationSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NotificationSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSubscriptionFindFirstArgs} args - Arguments to find a NotificationSubscription
     * @example
     * // Get one NotificationSubscription
     * const notificationSubscription = await prisma.notificationSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationSubscriptionFindFirstArgs>(args?: SelectSubset<T, NotificationSubscriptionFindFirstArgs<ExtArgs>>): Prisma__NotificationSubscriptionClient<$Result.GetResult<Prisma.$NotificationSubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NotificationSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSubscriptionFindFirstOrThrowArgs} args - Arguments to find a NotificationSubscription
     * @example
     * // Get one NotificationSubscription
     * const notificationSubscription = await prisma.notificationSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationSubscriptionClient<$Result.GetResult<Prisma.$NotificationSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NotificationSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationSubscriptions
     * const notificationSubscriptions = await prisma.notificationSubscription.findMany()
     * 
     * // Get first 10 NotificationSubscriptions
     * const notificationSubscriptions = await prisma.notificationSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationSubscriptionWithIdOnly = await prisma.notificationSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationSubscriptionFindManyArgs>(args?: SelectSubset<T, NotificationSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NotificationSubscription.
     * @param {NotificationSubscriptionCreateArgs} args - Arguments to create a NotificationSubscription.
     * @example
     * // Create one NotificationSubscription
     * const NotificationSubscription = await prisma.notificationSubscription.create({
     *   data: {
     *     // ... data to create a NotificationSubscription
     *   }
     * })
     * 
     */
    create<T extends NotificationSubscriptionCreateArgs>(args: SelectSubset<T, NotificationSubscriptionCreateArgs<ExtArgs>>): Prisma__NotificationSubscriptionClient<$Result.GetResult<Prisma.$NotificationSubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NotificationSubscriptions.
     * @param {NotificationSubscriptionCreateManyArgs} args - Arguments to create many NotificationSubscriptions.
     * @example
     * // Create many NotificationSubscriptions
     * const notificationSubscription = await prisma.notificationSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationSubscriptionCreateManyArgs>(args?: SelectSubset<T, NotificationSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationSubscriptions and returns the data saved in the database.
     * @param {NotificationSubscriptionCreateManyAndReturnArgs} args - Arguments to create many NotificationSubscriptions.
     * @example
     * // Create many NotificationSubscriptions
     * const notificationSubscription = await prisma.notificationSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationSubscriptions and only return the `id`
     * const notificationSubscriptionWithIdOnly = await prisma.notificationSubscription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSubscriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NotificationSubscription.
     * @param {NotificationSubscriptionDeleteArgs} args - Arguments to delete one NotificationSubscription.
     * @example
     * // Delete one NotificationSubscription
     * const NotificationSubscription = await prisma.notificationSubscription.delete({
     *   where: {
     *     // ... filter to delete one NotificationSubscription
     *   }
     * })
     * 
     */
    delete<T extends NotificationSubscriptionDeleteArgs>(args: SelectSubset<T, NotificationSubscriptionDeleteArgs<ExtArgs>>): Prisma__NotificationSubscriptionClient<$Result.GetResult<Prisma.$NotificationSubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NotificationSubscription.
     * @param {NotificationSubscriptionUpdateArgs} args - Arguments to update one NotificationSubscription.
     * @example
     * // Update one NotificationSubscription
     * const notificationSubscription = await prisma.notificationSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationSubscriptionUpdateArgs>(args: SelectSubset<T, NotificationSubscriptionUpdateArgs<ExtArgs>>): Prisma__NotificationSubscriptionClient<$Result.GetResult<Prisma.$NotificationSubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NotificationSubscriptions.
     * @param {NotificationSubscriptionDeleteManyArgs} args - Arguments to filter NotificationSubscriptions to delete.
     * @example
     * // Delete a few NotificationSubscriptions
     * const { count } = await prisma.notificationSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationSubscriptionDeleteManyArgs>(args?: SelectSubset<T, NotificationSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationSubscriptions
     * const notificationSubscription = await prisma.notificationSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationSubscriptionUpdateManyArgs>(args: SelectSubset<T, NotificationSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationSubscription.
     * @param {NotificationSubscriptionUpsertArgs} args - Arguments to update or create a NotificationSubscription.
     * @example
     * // Update or create a NotificationSubscription
     * const notificationSubscription = await prisma.notificationSubscription.upsert({
     *   create: {
     *     // ... data to create a NotificationSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationSubscription we want to update
     *   }
     * })
     */
    upsert<T extends NotificationSubscriptionUpsertArgs>(args: SelectSubset<T, NotificationSubscriptionUpsertArgs<ExtArgs>>): Prisma__NotificationSubscriptionClient<$Result.GetResult<Prisma.$NotificationSubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NotificationSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSubscriptionCountArgs} args - Arguments to filter NotificationSubscriptions to count.
     * @example
     * // Count the number of NotificationSubscriptions
     * const count = await prisma.notificationSubscription.count({
     *   where: {
     *     // ... the filter for the NotificationSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends NotificationSubscriptionCountArgs>(
      args?: Subset<T, NotificationSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationSubscriptionAggregateArgs>(args: Subset<T, NotificationSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetNotificationSubscriptionAggregateType<T>>

    /**
     * Group by NotificationSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: NotificationSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationSubscription model
   */
  readonly fields: NotificationSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotificationSubscription model
   */ 
  interface NotificationSubscriptionFieldRefs {
    readonly id: FieldRef<"NotificationSubscription", 'String'>
    readonly userId: FieldRef<"NotificationSubscription", 'String'>
    readonly endpoint: FieldRef<"NotificationSubscription", 'String'>
    readonly p256dh: FieldRef<"NotificationSubscription", 'String'>
    readonly auth: FieldRef<"NotificationSubscription", 'String'>
    readonly createdAt: FieldRef<"NotificationSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationSubscription findUnique
   */
  export type NotificationSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSubscription to fetch.
     */
    where: NotificationSubscriptionWhereUniqueInput
  }

  /**
   * NotificationSubscription findUniqueOrThrow
   */
  export type NotificationSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSubscription to fetch.
     */
    where: NotificationSubscriptionWhereUniqueInput
  }

  /**
   * NotificationSubscription findFirst
   */
  export type NotificationSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSubscription to fetch.
     */
    where?: NotificationSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSubscriptions to fetch.
     */
    orderBy?: NotificationSubscriptionOrderByWithRelationInput | NotificationSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSubscriptions.
     */
    cursor?: NotificationSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSubscriptions.
     */
    distinct?: NotificationSubscriptionScalarFieldEnum | NotificationSubscriptionScalarFieldEnum[]
  }

  /**
   * NotificationSubscription findFirstOrThrow
   */
  export type NotificationSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSubscription to fetch.
     */
    where?: NotificationSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSubscriptions to fetch.
     */
    orderBy?: NotificationSubscriptionOrderByWithRelationInput | NotificationSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSubscriptions.
     */
    cursor?: NotificationSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSubscriptions.
     */
    distinct?: NotificationSubscriptionScalarFieldEnum | NotificationSubscriptionScalarFieldEnum[]
  }

  /**
   * NotificationSubscription findMany
   */
  export type NotificationSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSubscriptions to fetch.
     */
    where?: NotificationSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSubscriptions to fetch.
     */
    orderBy?: NotificationSubscriptionOrderByWithRelationInput | NotificationSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationSubscriptions.
     */
    cursor?: NotificationSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSubscriptions.
     */
    skip?: number
    distinct?: NotificationSubscriptionScalarFieldEnum | NotificationSubscriptionScalarFieldEnum[]
  }

  /**
   * NotificationSubscription create
   */
  export type NotificationSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationSubscription.
     */
    data: XOR<NotificationSubscriptionCreateInput, NotificationSubscriptionUncheckedCreateInput>
  }

  /**
   * NotificationSubscription createMany
   */
  export type NotificationSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationSubscriptions.
     */
    data: NotificationSubscriptionCreateManyInput | NotificationSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationSubscription createManyAndReturn
   */
  export type NotificationSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NotificationSubscriptions.
     */
    data: NotificationSubscriptionCreateManyInput | NotificationSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationSubscription update
   */
  export type NotificationSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationSubscription.
     */
    data: XOR<NotificationSubscriptionUpdateInput, NotificationSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which NotificationSubscription to update.
     */
    where: NotificationSubscriptionWhereUniqueInput
  }

  /**
   * NotificationSubscription updateMany
   */
  export type NotificationSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationSubscriptions.
     */
    data: XOR<NotificationSubscriptionUpdateManyMutationInput, NotificationSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSubscriptions to update
     */
    where?: NotificationSubscriptionWhereInput
  }

  /**
   * NotificationSubscription upsert
   */
  export type NotificationSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationSubscription to update in case it exists.
     */
    where: NotificationSubscriptionWhereUniqueInput
    /**
     * In case the NotificationSubscription found by the `where` argument doesn't exist, create a new NotificationSubscription with this data.
     */
    create: XOR<NotificationSubscriptionCreateInput, NotificationSubscriptionUncheckedCreateInput>
    /**
     * In case the NotificationSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationSubscriptionUpdateInput, NotificationSubscriptionUncheckedUpdateInput>
  }

  /**
   * NotificationSubscription delete
   */
  export type NotificationSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which NotificationSubscription to delete.
     */
    where: NotificationSubscriptionWhereUniqueInput
  }

  /**
   * NotificationSubscription deleteMany
   */
  export type NotificationSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSubscriptions to delete
     */
    where?: NotificationSubscriptionWhereInput
  }

  /**
   * NotificationSubscription without action
   */
  export type NotificationSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSubscription
     */
    select?: NotificationSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesAvgAggregateOutputType = {
    reminderLeadTime: number | null
  }

  export type UserPreferencesSumAggregateOutputType = {
    reminderLeadTime: number | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    notificationsEnabled: boolean | null
    reminderLeadTime: number | null
    timezone: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    notificationsEnabled: boolean | null
    reminderLeadTime: number | null
    timezone: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    id: number
    userId: number
    notificationsEnabled: number
    reminderLeadTime: number
    timezone: number
    language: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPreferencesAvgAggregateInputType = {
    reminderLeadTime?: true
  }

  export type UserPreferencesSumAggregateInputType = {
    reminderLeadTime?: true
  }

  export type UserPreferencesMinAggregateInputType = {
    id?: true
    userId?: true
    notificationsEnabled?: true
    reminderLeadTime?: true
    timezone?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    id?: true
    userId?: true
    notificationsEnabled?: true
    reminderLeadTime?: true
    timezone?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    id?: true
    userId?: true
    notificationsEnabled?: true
    reminderLeadTime?: true
    timezone?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _avg?: UserPreferencesAvgAggregateInputType
    _sum?: UserPreferencesSumAggregateInputType
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    id: string
    userId: string
    notificationsEnabled: boolean
    reminderLeadTime: number
    timezone: string
    language: string
    createdAt: Date
    updatedAt: Date
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationsEnabled?: boolean
    reminderLeadTime?: boolean
    timezone?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationsEnabled?: boolean
    reminderLeadTime?: boolean
    timezone?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    id?: boolean
    userId?: boolean
    notificationsEnabled?: boolean
    reminderLeadTime?: boolean
    timezone?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      notificationsEnabled: boolean
      reminderLeadTime: number
      timezone: string
      language: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreferences model
   */ 
  interface UserPreferencesFieldRefs {
    readonly id: FieldRef<"UserPreferences", 'String'>
    readonly userId: FieldRef<"UserPreferences", 'String'>
    readonly notificationsEnabled: FieldRef<"UserPreferences", 'Boolean'>
    readonly reminderLeadTime: FieldRef<"UserPreferences", 'Int'>
    readonly timezone: FieldRef<"UserPreferences", 'String'>
    readonly language: FieldRef<"UserPreferences", 'String'>
    readonly createdAt: FieldRef<"UserPreferences", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreferences", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    type: 'type',
    dosage: 'dosage',
    frequency: 'frequency',
    isActive: 'isActive',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const MedicationScheduleScalarFieldEnum: {
    id: 'id',
    medicationId: 'medicationId',
    timeOfDay: 'timeOfDay',
    daysOfWeek: 'daysOfWeek',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicationScheduleScalarFieldEnum = (typeof MedicationScheduleScalarFieldEnum)[keyof typeof MedicationScheduleScalarFieldEnum]


  export const MedicationLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    medicationId: 'medicationId',
    scheduledTime: 'scheduledTime',
    takenAt: 'takenAt',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicationLogScalarFieldEnum = (typeof MedicationLogScalarFieldEnum)[keyof typeof MedicationLogScalarFieldEnum]


  export const DailyStreakScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    totalDoses: 'totalDoses',
    completedDoses: 'completedDoses',
    missedDoses: 'missedDoses',
    isCompleted: 'isCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyStreakScalarFieldEnum = (typeof DailyStreakScalarFieldEnum)[keyof typeof DailyStreakScalarFieldEnum]


  export const NotificationSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    endpoint: 'endpoint',
    p256dh: 'p256dh',
    auth: 'auth',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationSubscriptionScalarFieldEnum = (typeof NotificationSubscriptionScalarFieldEnum)[keyof typeof NotificationSubscriptionScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    notificationsEnabled: 'notificationsEnabled',
    reminderLeadTime: 'reminderLeadTime',
    timezone: 'timezone',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    medications?: MedicationListRelationFilter
    medicationLogs?: MedicationLogListRelationFilter
    dailyStreaks?: DailyStreakListRelationFilter
    notificationSubscriptions?: NotificationSubscriptionListRelationFilter
    preferences?: XOR<UserPreferencesNullableRelationFilter, UserPreferencesWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medications?: MedicationOrderByRelationAggregateInput
    medicationLogs?: MedicationLogOrderByRelationAggregateInput
    dailyStreaks?: DailyStreakOrderByRelationAggregateInput
    notificationSubscriptions?: NotificationSubscriptionOrderByRelationAggregateInput
    preferences?: UserPreferencesOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    medications?: MedicationListRelationFilter
    medicationLogs?: MedicationLogListRelationFilter
    dailyStreaks?: DailyStreakListRelationFilter
    notificationSubscriptions?: NotificationSubscriptionListRelationFilter
    preferences?: XOR<UserPreferencesNullableRelationFilter, UserPreferencesWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: StringFilter<"Medication"> | string
    userId?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    description?: StringNullableFilter<"Medication"> | string | null
    type?: StringFilter<"Medication"> | string
    dosage?: StringNullableFilter<"Medication"> | string | null
    frequency?: IntFilter<"Medication"> | number
    isActive?: BoolFilter<"Medication"> | boolean
    startDate?: DateTimeFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    schedules?: MedicationScheduleListRelationFilter
    logs?: MedicationLogListRelationFilter
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    dosage?: SortOrderInput | SortOrder
    frequency?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    schedules?: MedicationScheduleOrderByRelationAggregateInput
    logs?: MedicationLogOrderByRelationAggregateInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    userId?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    description?: StringNullableFilter<"Medication"> | string | null
    type?: StringFilter<"Medication"> | string
    dosage?: StringNullableFilter<"Medication"> | string | null
    frequency?: IntFilter<"Medication"> | number
    isActive?: BoolFilter<"Medication"> | boolean
    startDate?: DateTimeFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    schedules?: MedicationScheduleListRelationFilter
    logs?: MedicationLogListRelationFilter
  }, "id">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    dosage?: SortOrderInput | SortOrder
    frequency?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _avg?: MedicationAvgOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
    _sum?: MedicationSumOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medication"> | string
    userId?: StringWithAggregatesFilter<"Medication"> | string
    name?: StringWithAggregatesFilter<"Medication"> | string
    description?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    type?: StringWithAggregatesFilter<"Medication"> | string
    dosage?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    frequency?: IntWithAggregatesFilter<"Medication"> | number
    isActive?: BoolWithAggregatesFilter<"Medication"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Medication"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
  }

  export type MedicationScheduleWhereInput = {
    AND?: MedicationScheduleWhereInput | MedicationScheduleWhereInput[]
    OR?: MedicationScheduleWhereInput[]
    NOT?: MedicationScheduleWhereInput | MedicationScheduleWhereInput[]
    id?: StringFilter<"MedicationSchedule"> | string
    medicationId?: StringFilter<"MedicationSchedule"> | string
    timeOfDay?: StringFilter<"MedicationSchedule"> | string
    daysOfWeek?: IntNullableListFilter<"MedicationSchedule">
    createdAt?: DateTimeFilter<"MedicationSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationSchedule"> | Date | string
    medication?: XOR<MedicationRelationFilter, MedicationWhereInput>
  }

  export type MedicationScheduleOrderByWithRelationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timeOfDay?: SortOrder
    daysOfWeek?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medication?: MedicationOrderByWithRelationInput
  }

  export type MedicationScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationScheduleWhereInput | MedicationScheduleWhereInput[]
    OR?: MedicationScheduleWhereInput[]
    NOT?: MedicationScheduleWhereInput | MedicationScheduleWhereInput[]
    medicationId?: StringFilter<"MedicationSchedule"> | string
    timeOfDay?: StringFilter<"MedicationSchedule"> | string
    daysOfWeek?: IntNullableListFilter<"MedicationSchedule">
    createdAt?: DateTimeFilter<"MedicationSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationSchedule"> | Date | string
    medication?: XOR<MedicationRelationFilter, MedicationWhereInput>
  }, "id">

  export type MedicationScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timeOfDay?: SortOrder
    daysOfWeek?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationScheduleCountOrderByAggregateInput
    _avg?: MedicationScheduleAvgOrderByAggregateInput
    _max?: MedicationScheduleMaxOrderByAggregateInput
    _min?: MedicationScheduleMinOrderByAggregateInput
    _sum?: MedicationScheduleSumOrderByAggregateInput
  }

  export type MedicationScheduleScalarWhereWithAggregatesInput = {
    AND?: MedicationScheduleScalarWhereWithAggregatesInput | MedicationScheduleScalarWhereWithAggregatesInput[]
    OR?: MedicationScheduleScalarWhereWithAggregatesInput[]
    NOT?: MedicationScheduleScalarWhereWithAggregatesInput | MedicationScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicationSchedule"> | string
    medicationId?: StringWithAggregatesFilter<"MedicationSchedule"> | string
    timeOfDay?: StringWithAggregatesFilter<"MedicationSchedule"> | string
    daysOfWeek?: IntNullableListFilter<"MedicationSchedule">
    createdAt?: DateTimeWithAggregatesFilter<"MedicationSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicationSchedule"> | Date | string
  }

  export type MedicationLogWhereInput = {
    AND?: MedicationLogWhereInput | MedicationLogWhereInput[]
    OR?: MedicationLogWhereInput[]
    NOT?: MedicationLogWhereInput | MedicationLogWhereInput[]
    id?: StringFilter<"MedicationLog"> | string
    userId?: StringFilter<"MedicationLog"> | string
    medicationId?: StringFilter<"MedicationLog"> | string
    scheduledTime?: DateTimeFilter<"MedicationLog"> | Date | string
    takenAt?: DateTimeNullableFilter<"MedicationLog"> | Date | string | null
    status?: StringFilter<"MedicationLog"> | string
    notes?: StringNullableFilter<"MedicationLog"> | string | null
    createdAt?: DateTimeFilter<"MedicationLog"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    medication?: XOR<MedicationRelationFilter, MedicationWhereInput>
  }

  export type MedicationLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    medicationId?: SortOrder
    scheduledTime?: SortOrder
    takenAt?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    medication?: MedicationOrderByWithRelationInput
  }

  export type MedicationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationLogWhereInput | MedicationLogWhereInput[]
    OR?: MedicationLogWhereInput[]
    NOT?: MedicationLogWhereInput | MedicationLogWhereInput[]
    userId?: StringFilter<"MedicationLog"> | string
    medicationId?: StringFilter<"MedicationLog"> | string
    scheduledTime?: DateTimeFilter<"MedicationLog"> | Date | string
    takenAt?: DateTimeNullableFilter<"MedicationLog"> | Date | string | null
    status?: StringFilter<"MedicationLog"> | string
    notes?: StringNullableFilter<"MedicationLog"> | string | null
    createdAt?: DateTimeFilter<"MedicationLog"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    medication?: XOR<MedicationRelationFilter, MedicationWhereInput>
  }, "id">

  export type MedicationLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    medicationId?: SortOrder
    scheduledTime?: SortOrder
    takenAt?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationLogCountOrderByAggregateInput
    _max?: MedicationLogMaxOrderByAggregateInput
    _min?: MedicationLogMinOrderByAggregateInput
  }

  export type MedicationLogScalarWhereWithAggregatesInput = {
    AND?: MedicationLogScalarWhereWithAggregatesInput | MedicationLogScalarWhereWithAggregatesInput[]
    OR?: MedicationLogScalarWhereWithAggregatesInput[]
    NOT?: MedicationLogScalarWhereWithAggregatesInput | MedicationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicationLog"> | string
    userId?: StringWithAggregatesFilter<"MedicationLog"> | string
    medicationId?: StringWithAggregatesFilter<"MedicationLog"> | string
    scheduledTime?: DateTimeWithAggregatesFilter<"MedicationLog"> | Date | string
    takenAt?: DateTimeNullableWithAggregatesFilter<"MedicationLog"> | Date | string | null
    status?: StringWithAggregatesFilter<"MedicationLog"> | string
    notes?: StringNullableWithAggregatesFilter<"MedicationLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MedicationLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicationLog"> | Date | string
  }

  export type DailyStreakWhereInput = {
    AND?: DailyStreakWhereInput | DailyStreakWhereInput[]
    OR?: DailyStreakWhereInput[]
    NOT?: DailyStreakWhereInput | DailyStreakWhereInput[]
    id?: StringFilter<"DailyStreak"> | string
    userId?: StringFilter<"DailyStreak"> | string
    date?: DateTimeFilter<"DailyStreak"> | Date | string
    totalDoses?: IntFilter<"DailyStreak"> | number
    completedDoses?: IntFilter<"DailyStreak"> | number
    missedDoses?: IntFilter<"DailyStreak"> | number
    isCompleted?: BoolFilter<"DailyStreak"> | boolean
    createdAt?: DateTimeFilter<"DailyStreak"> | Date | string
    updatedAt?: DateTimeFilter<"DailyStreak"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DailyStreakOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalDoses?: SortOrder
    completedDoses?: SortOrder
    missedDoses?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyStreakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DailyStreakUserIdDateCompoundUniqueInput
    AND?: DailyStreakWhereInput | DailyStreakWhereInput[]
    OR?: DailyStreakWhereInput[]
    NOT?: DailyStreakWhereInput | DailyStreakWhereInput[]
    userId?: StringFilter<"DailyStreak"> | string
    date?: DateTimeFilter<"DailyStreak"> | Date | string
    totalDoses?: IntFilter<"DailyStreak"> | number
    completedDoses?: IntFilter<"DailyStreak"> | number
    missedDoses?: IntFilter<"DailyStreak"> | number
    isCompleted?: BoolFilter<"DailyStreak"> | boolean
    createdAt?: DateTimeFilter<"DailyStreak"> | Date | string
    updatedAt?: DateTimeFilter<"DailyStreak"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DailyStreakOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalDoses?: SortOrder
    completedDoses?: SortOrder
    missedDoses?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyStreakCountOrderByAggregateInput
    _avg?: DailyStreakAvgOrderByAggregateInput
    _max?: DailyStreakMaxOrderByAggregateInput
    _min?: DailyStreakMinOrderByAggregateInput
    _sum?: DailyStreakSumOrderByAggregateInput
  }

  export type DailyStreakScalarWhereWithAggregatesInput = {
    AND?: DailyStreakScalarWhereWithAggregatesInput | DailyStreakScalarWhereWithAggregatesInput[]
    OR?: DailyStreakScalarWhereWithAggregatesInput[]
    NOT?: DailyStreakScalarWhereWithAggregatesInput | DailyStreakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyStreak"> | string
    userId?: StringWithAggregatesFilter<"DailyStreak"> | string
    date?: DateTimeWithAggregatesFilter<"DailyStreak"> | Date | string
    totalDoses?: IntWithAggregatesFilter<"DailyStreak"> | number
    completedDoses?: IntWithAggregatesFilter<"DailyStreak"> | number
    missedDoses?: IntWithAggregatesFilter<"DailyStreak"> | number
    isCompleted?: BoolWithAggregatesFilter<"DailyStreak"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DailyStreak"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyStreak"> | Date | string
  }

  export type NotificationSubscriptionWhereInput = {
    AND?: NotificationSubscriptionWhereInput | NotificationSubscriptionWhereInput[]
    OR?: NotificationSubscriptionWhereInput[]
    NOT?: NotificationSubscriptionWhereInput | NotificationSubscriptionWhereInput[]
    id?: StringFilter<"NotificationSubscription"> | string
    userId?: StringFilter<"NotificationSubscription"> | string
    endpoint?: StringFilter<"NotificationSubscription"> | string
    p256dh?: StringFilter<"NotificationSubscription"> | string
    auth?: StringFilter<"NotificationSubscription"> | string
    createdAt?: DateTimeFilter<"NotificationSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationSubscription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    endpoint?: string
    AND?: NotificationSubscriptionWhereInput | NotificationSubscriptionWhereInput[]
    OR?: NotificationSubscriptionWhereInput[]
    NOT?: NotificationSubscriptionWhereInput | NotificationSubscriptionWhereInput[]
    userId?: StringFilter<"NotificationSubscription"> | string
    p256dh?: StringFilter<"NotificationSubscription"> | string
    auth?: StringFilter<"NotificationSubscription"> | string
    createdAt?: DateTimeFilter<"NotificationSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationSubscription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "endpoint">

  export type NotificationSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationSubscriptionCountOrderByAggregateInput
    _max?: NotificationSubscriptionMaxOrderByAggregateInput
    _min?: NotificationSubscriptionMinOrderByAggregateInput
  }

  export type NotificationSubscriptionScalarWhereWithAggregatesInput = {
    AND?: NotificationSubscriptionScalarWhereWithAggregatesInput | NotificationSubscriptionScalarWhereWithAggregatesInput[]
    OR?: NotificationSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: NotificationSubscriptionScalarWhereWithAggregatesInput | NotificationSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationSubscription"> | string
    userId?: StringWithAggregatesFilter<"NotificationSubscription"> | string
    endpoint?: StringWithAggregatesFilter<"NotificationSubscription"> | string
    p256dh?: StringWithAggregatesFilter<"NotificationSubscription"> | string
    auth?: StringWithAggregatesFilter<"NotificationSubscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NotificationSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationSubscription"> | Date | string
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    notificationsEnabled?: BoolFilter<"UserPreferences"> | boolean
    reminderLeadTime?: IntFilter<"UserPreferences"> | number
    timezone?: StringFilter<"UserPreferences"> | string
    language?: StringFilter<"UserPreferences"> | string
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationsEnabled?: SortOrder
    reminderLeadTime?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    notificationsEnabled?: BoolFilter<"UserPreferences"> | boolean
    reminderLeadTime?: IntFilter<"UserPreferences"> | number
    timezone?: StringFilter<"UserPreferences"> | string
    language?: StringFilter<"UserPreferences"> | string
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationsEnabled?: SortOrder
    reminderLeadTime?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _avg?: UserPreferencesAvgOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
    _sum?: UserPreferencesSumOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreferences"> | string
    userId?: StringWithAggregatesFilter<"UserPreferences"> | string
    notificationsEnabled?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    reminderLeadTime?: IntWithAggregatesFilter<"UserPreferences"> | number
    timezone?: StringWithAggregatesFilter<"UserPreferences"> | string
    language?: StringWithAggregatesFilter<"UserPreferences"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationCreateNestedManyWithoutUserInput
    medicationLogs?: MedicationLogCreateNestedManyWithoutUserInput
    dailyStreaks?: DailyStreakCreateNestedManyWithoutUserInput
    notificationSubscriptions?: NotificationSubscriptionCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutUserInput
    medicationLogs?: MedicationLogUncheckedCreateNestedManyWithoutUserInput
    dailyStreaks?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    notificationSubscriptions?: NotificationSubscriptionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUpdateManyWithoutUserNestedInput
    medicationLogs?: MedicationLogUpdateManyWithoutUserNestedInput
    dailyStreaks?: DailyStreakUpdateManyWithoutUserNestedInput
    notificationSubscriptions?: NotificationSubscriptionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutUserNestedInput
    medicationLogs?: MedicationLogUncheckedUpdateManyWithoutUserNestedInput
    dailyStreaks?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    notificationSubscriptions?: NotificationSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationCreateInput = {
    id?: string
    name: string
    description?: string | null
    type?: string
    dosage?: string | null
    frequency?: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicationsInput
    schedules?: MedicationScheduleCreateNestedManyWithoutMedicationInput
    logs?: MedicationLogCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    type?: string
    dosage?: string | null
    frequency?: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: MedicationScheduleUncheckedCreateNestedManyWithoutMedicationInput
    logs?: MedicationLogUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicationsNestedInput
    schedules?: MedicationScheduleUpdateManyWithoutMedicationNestedInput
    logs?: MedicationLogUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: MedicationScheduleUncheckedUpdateManyWithoutMedicationNestedInput
    logs?: MedicationLogUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    type?: string
    dosage?: string | null
    frequency?: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationScheduleCreateInput = {
    id?: string
    timeOfDay: string
    daysOfWeek?: MedicationScheduleCreatedaysOfWeekInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutSchedulesInput
  }

  export type MedicationScheduleUncheckedCreateInput = {
    id?: string
    medicationId: string
    timeOfDay: string
    daysOfWeek?: MedicationScheduleCreatedaysOfWeekInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: MedicationScheduleUpdatedaysOfWeekInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type MedicationScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: MedicationScheduleUpdatedaysOfWeekInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationScheduleCreateManyInput = {
    id?: string
    medicationId: string
    timeOfDay: string
    daysOfWeek?: MedicationScheduleCreatedaysOfWeekInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: MedicationScheduleUpdatedaysOfWeekInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: MedicationScheduleUpdatedaysOfWeekInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogCreateInput = {
    id?: string
    scheduledTime: Date | string
    takenAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicationLogsInput
    medication: MedicationCreateNestedOneWithoutLogsInput
  }

  export type MedicationLogUncheckedCreateInput = {
    id?: string
    userId: string
    medicationId: string
    scheduledTime: Date | string
    takenAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicationLogsNestedInput
    medication?: MedicationUpdateOneRequiredWithoutLogsNestedInput
  }

  export type MedicationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogCreateManyInput = {
    id?: string
    userId: string
    medicationId: string
    scheduledTime: Date | string
    takenAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakCreateInput = {
    id?: string
    date: Date | string
    totalDoses?: number
    completedDoses?: number
    missedDoses?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyStreaksInput
  }

  export type DailyStreakUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    totalDoses?: number
    completedDoses?: number
    missedDoses?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyStreakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDoses?: IntFieldUpdateOperationsInput | number
    completedDoses?: IntFieldUpdateOperationsInput | number
    missedDoses?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyStreaksNestedInput
  }

  export type DailyStreakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDoses?: IntFieldUpdateOperationsInput | number
    completedDoses?: IntFieldUpdateOperationsInput | number
    missedDoses?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    totalDoses?: number
    completedDoses?: number
    missedDoses?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyStreakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDoses?: IntFieldUpdateOperationsInput | number
    completedDoses?: IntFieldUpdateOperationsInput | number
    missedDoses?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDoses?: IntFieldUpdateOperationsInput | number
    completedDoses?: IntFieldUpdateOperationsInput | number
    missedDoses?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSubscriptionCreateInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationSubscriptionsInput
  }

  export type NotificationSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationSubscriptionsNestedInput
  }

  export type NotificationSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSubscriptionCreateManyInput = {
    id?: string
    userId: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateInput = {
    id?: string
    notificationsEnabled?: boolean
    reminderLeadTime?: number
    timezone?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    id?: string
    userId: string
    notificationsEnabled?: boolean
    reminderLeadTime?: number
    timezone?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderLeadTime?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderLeadTime?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateManyInput = {
    id?: string
    userId: string
    notificationsEnabled?: boolean
    reminderLeadTime?: number
    timezone?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderLeadTime?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderLeadTime?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MedicationListRelationFilter = {
    every?: MedicationWhereInput
    some?: MedicationWhereInput
    none?: MedicationWhereInput
  }

  export type MedicationLogListRelationFilter = {
    every?: MedicationLogWhereInput
    some?: MedicationLogWhereInput
    none?: MedicationLogWhereInput
  }

  export type DailyStreakListRelationFilter = {
    every?: DailyStreakWhereInput
    some?: DailyStreakWhereInput
    none?: DailyStreakWhereInput
  }

  export type NotificationSubscriptionListRelationFilter = {
    every?: NotificationSubscriptionWhereInput
    some?: NotificationSubscriptionWhereInput
    none?: NotificationSubscriptionWhereInput
  }

  export type UserPreferencesNullableRelationFilter = {
    is?: UserPreferencesWhereInput | null
    isNot?: UserPreferencesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyStreakOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MedicationScheduleListRelationFilter = {
    every?: MedicationScheduleWhereInput
    some?: MedicationScheduleWhereInput
    none?: MedicationScheduleWhereInput
  }

  export type MedicationScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationAvgOrderByAggregateInput = {
    frequency?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationSumOrderByAggregateInput = {
    frequency?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MedicationRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type MedicationScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timeOfDay?: SortOrder
    daysOfWeek?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationScheduleAvgOrderByAggregateInput = {
    daysOfWeek?: SortOrder
  }

  export type MedicationScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timeOfDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timeOfDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationScheduleSumOrderByAggregateInput = {
    daysOfWeek?: SortOrder
  }

  export type MedicationLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    medicationId?: SortOrder
    scheduledTime?: SortOrder
    takenAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    medicationId?: SortOrder
    scheduledTime?: SortOrder
    takenAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    medicationId?: SortOrder
    scheduledTime?: SortOrder
    takenAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyStreakUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type DailyStreakCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalDoses?: SortOrder
    completedDoses?: SortOrder
    missedDoses?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyStreakAvgOrderByAggregateInput = {
    totalDoses?: SortOrder
    completedDoses?: SortOrder
    missedDoses?: SortOrder
  }

  export type DailyStreakMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalDoses?: SortOrder
    completedDoses?: SortOrder
    missedDoses?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyStreakMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    totalDoses?: SortOrder
    completedDoses?: SortOrder
    missedDoses?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyStreakSumOrderByAggregateInput = {
    totalDoses?: SortOrder
    completedDoses?: SortOrder
    missedDoses?: SortOrder
  }

  export type NotificationSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationsEnabled?: SortOrder
    reminderLeadTime?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesAvgOrderByAggregateInput = {
    reminderLeadTime?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationsEnabled?: SortOrder
    reminderLeadTime?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationsEnabled?: SortOrder
    reminderLeadTime?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesSumOrderByAggregateInput = {
    reminderLeadTime?: SortOrder
  }

  export type MedicationCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicationLogCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput> | MedicationLogCreateWithoutUserInput[] | MedicationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutUserInput | MedicationLogCreateOrConnectWithoutUserInput[]
    createMany?: MedicationLogCreateManyUserInputEnvelope
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
  }

  export type DailyStreakCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput> | DailyStreakCreateWithoutUserInput[] | DailyStreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutUserInput | DailyStreakCreateOrConnectWithoutUserInput[]
    createMany?: DailyStreakCreateManyUserInputEnvelope
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
  }

  export type NotificationSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationSubscriptionCreateWithoutUserInput, NotificationSubscriptionUncheckedCreateWithoutUserInput> | NotificationSubscriptionCreateWithoutUserInput[] | NotificationSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationSubscriptionCreateOrConnectWithoutUserInput | NotificationSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: NotificationSubscriptionCreateManyUserInputEnvelope
    connect?: NotificationSubscriptionWhereUniqueInput | NotificationSubscriptionWhereUniqueInput[]
  }

  export type UserPreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type MedicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicationLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput> | MedicationLogCreateWithoutUserInput[] | MedicationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutUserInput | MedicationLogCreateOrConnectWithoutUserInput[]
    createMany?: MedicationLogCreateManyUserInputEnvelope
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
  }

  export type DailyStreakUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput> | DailyStreakCreateWithoutUserInput[] | DailyStreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutUserInput | DailyStreakCreateOrConnectWithoutUserInput[]
    createMany?: DailyStreakCreateManyUserInputEnvelope
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
  }

  export type NotificationSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationSubscriptionCreateWithoutUserInput, NotificationSubscriptionUncheckedCreateWithoutUserInput> | NotificationSubscriptionCreateWithoutUserInput[] | NotificationSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationSubscriptionCreateOrConnectWithoutUserInput | NotificationSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: NotificationSubscriptionCreateManyUserInputEnvelope
    connect?: NotificationSubscriptionWhereUniqueInput | NotificationSubscriptionWhereUniqueInput[]
  }

  export type UserPreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MedicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutUserInput | MedicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutUserInput | MedicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutUserInput | MedicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type MedicationLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput> | MedicationLogCreateWithoutUserInput[] | MedicationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutUserInput | MedicationLogCreateOrConnectWithoutUserInput[]
    upsert?: MedicationLogUpsertWithWhereUniqueWithoutUserInput | MedicationLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationLogCreateManyUserInputEnvelope
    set?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    disconnect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    delete?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    update?: MedicationLogUpdateWithWhereUniqueWithoutUserInput | MedicationLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationLogUpdateManyWithWhereWithoutUserInput | MedicationLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
  }

  export type DailyStreakUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput> | DailyStreakCreateWithoutUserInput[] | DailyStreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutUserInput | DailyStreakCreateOrConnectWithoutUserInput[]
    upsert?: DailyStreakUpsertWithWhereUniqueWithoutUserInput | DailyStreakUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyStreakCreateManyUserInputEnvelope
    set?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    disconnect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    delete?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    update?: DailyStreakUpdateWithWhereUniqueWithoutUserInput | DailyStreakUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyStreakUpdateManyWithWhereWithoutUserInput | DailyStreakUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyStreakScalarWhereInput | DailyStreakScalarWhereInput[]
  }

  export type NotificationSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationSubscriptionCreateWithoutUserInput, NotificationSubscriptionUncheckedCreateWithoutUserInput> | NotificationSubscriptionCreateWithoutUserInput[] | NotificationSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationSubscriptionCreateOrConnectWithoutUserInput | NotificationSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: NotificationSubscriptionUpsertWithWhereUniqueWithoutUserInput | NotificationSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationSubscriptionCreateManyUserInputEnvelope
    set?: NotificationSubscriptionWhereUniqueInput | NotificationSubscriptionWhereUniqueInput[]
    disconnect?: NotificationSubscriptionWhereUniqueInput | NotificationSubscriptionWhereUniqueInput[]
    delete?: NotificationSubscriptionWhereUniqueInput | NotificationSubscriptionWhereUniqueInput[]
    connect?: NotificationSubscriptionWhereUniqueInput | NotificationSubscriptionWhereUniqueInput[]
    update?: NotificationSubscriptionUpdateWithWhereUniqueWithoutUserInput | NotificationSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationSubscriptionUpdateManyWithWhereWithoutUserInput | NotificationSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationSubscriptionScalarWhereInput | NotificationSubscriptionScalarWhereInput[]
  }

  export type UserPreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type MedicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput> | MedicationCreateWithoutUserInput[] | MedicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutUserInput | MedicationCreateOrConnectWithoutUserInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutUserInput | MedicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationCreateManyUserInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutUserInput | MedicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutUserInput | MedicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type MedicationLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput> | MedicationLogCreateWithoutUserInput[] | MedicationLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutUserInput | MedicationLogCreateOrConnectWithoutUserInput[]
    upsert?: MedicationLogUpsertWithWhereUniqueWithoutUserInput | MedicationLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationLogCreateManyUserInputEnvelope
    set?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    disconnect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    delete?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    update?: MedicationLogUpdateWithWhereUniqueWithoutUserInput | MedicationLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationLogUpdateManyWithWhereWithoutUserInput | MedicationLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
  }

  export type DailyStreakUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput> | DailyStreakCreateWithoutUserInput[] | DailyStreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutUserInput | DailyStreakCreateOrConnectWithoutUserInput[]
    upsert?: DailyStreakUpsertWithWhereUniqueWithoutUserInput | DailyStreakUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyStreakCreateManyUserInputEnvelope
    set?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    disconnect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    delete?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    update?: DailyStreakUpdateWithWhereUniqueWithoutUserInput | DailyStreakUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyStreakUpdateManyWithWhereWithoutUserInput | DailyStreakUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyStreakScalarWhereInput | DailyStreakScalarWhereInput[]
  }

  export type NotificationSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationSubscriptionCreateWithoutUserInput, NotificationSubscriptionUncheckedCreateWithoutUserInput> | NotificationSubscriptionCreateWithoutUserInput[] | NotificationSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationSubscriptionCreateOrConnectWithoutUserInput | NotificationSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: NotificationSubscriptionUpsertWithWhereUniqueWithoutUserInput | NotificationSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationSubscriptionCreateManyUserInputEnvelope
    set?: NotificationSubscriptionWhereUniqueInput | NotificationSubscriptionWhereUniqueInput[]
    disconnect?: NotificationSubscriptionWhereUniqueInput | NotificationSubscriptionWhereUniqueInput[]
    delete?: NotificationSubscriptionWhereUniqueInput | NotificationSubscriptionWhereUniqueInput[]
    connect?: NotificationSubscriptionWhereUniqueInput | NotificationSubscriptionWhereUniqueInput[]
    update?: NotificationSubscriptionUpdateWithWhereUniqueWithoutUserInput | NotificationSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationSubscriptionUpdateManyWithWhereWithoutUserInput | NotificationSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationSubscriptionScalarWhereInput | NotificationSubscriptionScalarWhereInput[]
  }

  export type UserPreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicationsInput
    connect?: UserWhereUniqueInput
  }

  export type MedicationScheduleCreateNestedManyWithoutMedicationInput = {
    create?: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput> | MedicationScheduleCreateWithoutMedicationInput[] | MedicationScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationScheduleCreateOrConnectWithoutMedicationInput | MedicationScheduleCreateOrConnectWithoutMedicationInput[]
    createMany?: MedicationScheduleCreateManyMedicationInputEnvelope
    connect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
  }

  export type MedicationLogCreateNestedManyWithoutMedicationInput = {
    create?: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput> | MedicationLogCreateWithoutMedicationInput[] | MedicationLogUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutMedicationInput | MedicationLogCreateOrConnectWithoutMedicationInput[]
    createMany?: MedicationLogCreateManyMedicationInputEnvelope
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
  }

  export type MedicationScheduleUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput> | MedicationScheduleCreateWithoutMedicationInput[] | MedicationScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationScheduleCreateOrConnectWithoutMedicationInput | MedicationScheduleCreateOrConnectWithoutMedicationInput[]
    createMany?: MedicationScheduleCreateManyMedicationInputEnvelope
    connect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
  }

  export type MedicationLogUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput> | MedicationLogCreateWithoutMedicationInput[] | MedicationLogUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutMedicationInput | MedicationLogCreateOrConnectWithoutMedicationInput[]
    createMany?: MedicationLogCreateManyMedicationInputEnvelope
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicationsInput
    upsert?: UserUpsertWithoutMedicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedicationsInput, UserUpdateWithoutMedicationsInput>, UserUncheckedUpdateWithoutMedicationsInput>
  }

  export type MedicationScheduleUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput> | MedicationScheduleCreateWithoutMedicationInput[] | MedicationScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationScheduleCreateOrConnectWithoutMedicationInput | MedicationScheduleCreateOrConnectWithoutMedicationInput[]
    upsert?: MedicationScheduleUpsertWithWhereUniqueWithoutMedicationInput | MedicationScheduleUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: MedicationScheduleCreateManyMedicationInputEnvelope
    set?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    disconnect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    delete?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    connect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    update?: MedicationScheduleUpdateWithWhereUniqueWithoutMedicationInput | MedicationScheduleUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: MedicationScheduleUpdateManyWithWhereWithoutMedicationInput | MedicationScheduleUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: MedicationScheduleScalarWhereInput | MedicationScheduleScalarWhereInput[]
  }

  export type MedicationLogUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput> | MedicationLogCreateWithoutMedicationInput[] | MedicationLogUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutMedicationInput | MedicationLogCreateOrConnectWithoutMedicationInput[]
    upsert?: MedicationLogUpsertWithWhereUniqueWithoutMedicationInput | MedicationLogUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: MedicationLogCreateManyMedicationInputEnvelope
    set?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    disconnect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    delete?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    update?: MedicationLogUpdateWithWhereUniqueWithoutMedicationInput | MedicationLogUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: MedicationLogUpdateManyWithWhereWithoutMedicationInput | MedicationLogUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
  }

  export type MedicationScheduleUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput> | MedicationScheduleCreateWithoutMedicationInput[] | MedicationScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationScheduleCreateOrConnectWithoutMedicationInput | MedicationScheduleCreateOrConnectWithoutMedicationInput[]
    upsert?: MedicationScheduleUpsertWithWhereUniqueWithoutMedicationInput | MedicationScheduleUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: MedicationScheduleCreateManyMedicationInputEnvelope
    set?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    disconnect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    delete?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    connect?: MedicationScheduleWhereUniqueInput | MedicationScheduleWhereUniqueInput[]
    update?: MedicationScheduleUpdateWithWhereUniqueWithoutMedicationInput | MedicationScheduleUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: MedicationScheduleUpdateManyWithWhereWithoutMedicationInput | MedicationScheduleUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: MedicationScheduleScalarWhereInput | MedicationScheduleScalarWhereInput[]
  }

  export type MedicationLogUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput> | MedicationLogCreateWithoutMedicationInput[] | MedicationLogUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationLogCreateOrConnectWithoutMedicationInput | MedicationLogCreateOrConnectWithoutMedicationInput[]
    upsert?: MedicationLogUpsertWithWhereUniqueWithoutMedicationInput | MedicationLogUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: MedicationLogCreateManyMedicationInputEnvelope
    set?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    disconnect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    delete?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    connect?: MedicationLogWhereUniqueInput | MedicationLogWhereUniqueInput[]
    update?: MedicationLogUpdateWithWhereUniqueWithoutMedicationInput | MedicationLogUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: MedicationLogUpdateManyWithWhereWithoutMedicationInput | MedicationLogUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
  }

  export type MedicationScheduleCreatedaysOfWeekInput = {
    set: number[]
  }

  export type MedicationCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutSchedulesInput
    connect?: MedicationWhereUniqueInput
  }

  export type MedicationScheduleUpdatedaysOfWeekInput = {
    set?: number[]
    push?: number | number[]
  }

  export type MedicationUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutSchedulesInput
    upsert?: MedicationUpsertWithoutSchedulesInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutSchedulesInput, MedicationUpdateWithoutSchedulesInput>, MedicationUncheckedUpdateWithoutSchedulesInput>
  }

  export type UserCreateNestedOneWithoutMedicationLogsInput = {
    create?: XOR<UserCreateWithoutMedicationLogsInput, UserUncheckedCreateWithoutMedicationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicationLogsInput
    connect?: UserWhereUniqueInput
  }

  export type MedicationCreateNestedOneWithoutLogsInput = {
    create?: XOR<MedicationCreateWithoutLogsInput, MedicationUncheckedCreateWithoutLogsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutLogsInput
    connect?: MedicationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMedicationLogsNestedInput = {
    create?: XOR<UserCreateWithoutMedicationLogsInput, UserUncheckedCreateWithoutMedicationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicationLogsInput
    upsert?: UserUpsertWithoutMedicationLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedicationLogsInput, UserUpdateWithoutMedicationLogsInput>, UserUncheckedUpdateWithoutMedicationLogsInput>
  }

  export type MedicationUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<MedicationCreateWithoutLogsInput, MedicationUncheckedCreateWithoutLogsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutLogsInput
    upsert?: MedicationUpsertWithoutLogsInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutLogsInput, MedicationUpdateWithoutLogsInput>, MedicationUncheckedUpdateWithoutLogsInput>
  }

  export type UserCreateNestedOneWithoutDailyStreaksInput = {
    create?: XOR<UserCreateWithoutDailyStreaksInput, UserUncheckedCreateWithoutDailyStreaksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyStreaksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyStreaksNestedInput = {
    create?: XOR<UserCreateWithoutDailyStreaksInput, UserUncheckedCreateWithoutDailyStreaksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyStreaksInput
    upsert?: UserUpsertWithoutDailyStreaksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyStreaksInput, UserUpdateWithoutDailyStreaksInput>, UserUncheckedUpdateWithoutDailyStreaksInput>
  }

  export type UserCreateNestedOneWithoutNotificationSubscriptionsInput = {
    create?: XOR<UserCreateWithoutNotificationSubscriptionsInput, UserUncheckedCreateWithoutNotificationSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationSubscriptionsInput, UserUncheckedCreateWithoutNotificationSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSubscriptionsInput
    upsert?: UserUpsertWithoutNotificationSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationSubscriptionsInput, UserUpdateWithoutNotificationSubscriptionsInput>, UserUncheckedUpdateWithoutNotificationSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MedicationCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    type?: string
    dosage?: string | null
    frequency?: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: MedicationScheduleCreateNestedManyWithoutMedicationInput
    logs?: MedicationLogCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    type?: string
    dosage?: string | null
    frequency?: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: MedicationScheduleUncheckedCreateNestedManyWithoutMedicationInput
    logs?: MedicationLogUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutUserInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput>
  }

  export type MedicationCreateManyUserInputEnvelope = {
    data: MedicationCreateManyUserInput | MedicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MedicationLogCreateWithoutUserInput = {
    id?: string
    scheduledTime: Date | string
    takenAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutLogsInput
  }

  export type MedicationLogUncheckedCreateWithoutUserInput = {
    id?: string
    medicationId: string
    scheduledTime: Date | string
    takenAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogCreateOrConnectWithoutUserInput = {
    where: MedicationLogWhereUniqueInput
    create: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput>
  }

  export type MedicationLogCreateManyUserInputEnvelope = {
    data: MedicationLogCreateManyUserInput | MedicationLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyStreakCreateWithoutUserInput = {
    id?: string
    date: Date | string
    totalDoses?: number
    completedDoses?: number
    missedDoses?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyStreakUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    totalDoses?: number
    completedDoses?: number
    missedDoses?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyStreakCreateOrConnectWithoutUserInput = {
    where: DailyStreakWhereUniqueInput
    create: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput>
  }

  export type DailyStreakCreateManyUserInputEnvelope = {
    data: DailyStreakCreateManyUserInput | DailyStreakCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationSubscriptionCreateWithoutUserInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSubscriptionCreateOrConnectWithoutUserInput = {
    where: NotificationSubscriptionWhereUniqueInput
    create: XOR<NotificationSubscriptionCreateWithoutUserInput, NotificationSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type NotificationSubscriptionCreateManyUserInputEnvelope = {
    data: NotificationSubscriptionCreateManyUserInput | NotificationSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferencesCreateWithoutUserInput = {
    id?: string
    notificationsEnabled?: boolean
    reminderLeadTime?: number
    timezone?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    notificationsEnabled?: boolean
    reminderLeadTime?: number
    timezone?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesCreateOrConnectWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type MedicationUpsertWithWhereUniqueWithoutUserInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutUserInput, MedicationUncheckedUpdateWithoutUserInput>
    create: XOR<MedicationCreateWithoutUserInput, MedicationUncheckedCreateWithoutUserInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutUserInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutUserInput, MedicationUncheckedUpdateWithoutUserInput>
  }

  export type MedicationUpdateManyWithWhereWithoutUserInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutUserInput>
  }

  export type MedicationScalarWhereInput = {
    AND?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    OR?: MedicationScalarWhereInput[]
    NOT?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    id?: StringFilter<"Medication"> | string
    userId?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    description?: StringNullableFilter<"Medication"> | string | null
    type?: StringFilter<"Medication"> | string
    dosage?: StringNullableFilter<"Medication"> | string | null
    frequency?: IntFilter<"Medication"> | number
    isActive?: BoolFilter<"Medication"> | boolean
    startDate?: DateTimeFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
  }

  export type MedicationLogUpsertWithWhereUniqueWithoutUserInput = {
    where: MedicationLogWhereUniqueInput
    update: XOR<MedicationLogUpdateWithoutUserInput, MedicationLogUncheckedUpdateWithoutUserInput>
    create: XOR<MedicationLogCreateWithoutUserInput, MedicationLogUncheckedCreateWithoutUserInput>
  }

  export type MedicationLogUpdateWithWhereUniqueWithoutUserInput = {
    where: MedicationLogWhereUniqueInput
    data: XOR<MedicationLogUpdateWithoutUserInput, MedicationLogUncheckedUpdateWithoutUserInput>
  }

  export type MedicationLogUpdateManyWithWhereWithoutUserInput = {
    where: MedicationLogScalarWhereInput
    data: XOR<MedicationLogUpdateManyMutationInput, MedicationLogUncheckedUpdateManyWithoutUserInput>
  }

  export type MedicationLogScalarWhereInput = {
    AND?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
    OR?: MedicationLogScalarWhereInput[]
    NOT?: MedicationLogScalarWhereInput | MedicationLogScalarWhereInput[]
    id?: StringFilter<"MedicationLog"> | string
    userId?: StringFilter<"MedicationLog"> | string
    medicationId?: StringFilter<"MedicationLog"> | string
    scheduledTime?: DateTimeFilter<"MedicationLog"> | Date | string
    takenAt?: DateTimeNullableFilter<"MedicationLog"> | Date | string | null
    status?: StringFilter<"MedicationLog"> | string
    notes?: StringNullableFilter<"MedicationLog"> | string | null
    createdAt?: DateTimeFilter<"MedicationLog"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationLog"> | Date | string
  }

  export type DailyStreakUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyStreakWhereUniqueInput
    update: XOR<DailyStreakUpdateWithoutUserInput, DailyStreakUncheckedUpdateWithoutUserInput>
    create: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput>
  }

  export type DailyStreakUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyStreakWhereUniqueInput
    data: XOR<DailyStreakUpdateWithoutUserInput, DailyStreakUncheckedUpdateWithoutUserInput>
  }

  export type DailyStreakUpdateManyWithWhereWithoutUserInput = {
    where: DailyStreakScalarWhereInput
    data: XOR<DailyStreakUpdateManyMutationInput, DailyStreakUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyStreakScalarWhereInput = {
    AND?: DailyStreakScalarWhereInput | DailyStreakScalarWhereInput[]
    OR?: DailyStreakScalarWhereInput[]
    NOT?: DailyStreakScalarWhereInput | DailyStreakScalarWhereInput[]
    id?: StringFilter<"DailyStreak"> | string
    userId?: StringFilter<"DailyStreak"> | string
    date?: DateTimeFilter<"DailyStreak"> | Date | string
    totalDoses?: IntFilter<"DailyStreak"> | number
    completedDoses?: IntFilter<"DailyStreak"> | number
    missedDoses?: IntFilter<"DailyStreak"> | number
    isCompleted?: BoolFilter<"DailyStreak"> | boolean
    createdAt?: DateTimeFilter<"DailyStreak"> | Date | string
    updatedAt?: DateTimeFilter<"DailyStreak"> | Date | string
  }

  export type NotificationSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationSubscriptionWhereUniqueInput
    update: XOR<NotificationSubscriptionUpdateWithoutUserInput, NotificationSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationSubscriptionCreateWithoutUserInput, NotificationSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type NotificationSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationSubscriptionWhereUniqueInput
    data: XOR<NotificationSubscriptionUpdateWithoutUserInput, NotificationSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type NotificationSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: NotificationSubscriptionScalarWhereInput
    data: XOR<NotificationSubscriptionUpdateManyMutationInput, NotificationSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationSubscriptionScalarWhereInput = {
    AND?: NotificationSubscriptionScalarWhereInput | NotificationSubscriptionScalarWhereInput[]
    OR?: NotificationSubscriptionScalarWhereInput[]
    NOT?: NotificationSubscriptionScalarWhereInput | NotificationSubscriptionScalarWhereInput[]
    id?: StringFilter<"NotificationSubscription"> | string
    userId?: StringFilter<"NotificationSubscription"> | string
    endpoint?: StringFilter<"NotificationSubscription"> | string
    p256dh?: StringFilter<"NotificationSubscription"> | string
    auth?: StringFilter<"NotificationSubscription"> | string
    createdAt?: DateTimeFilter<"NotificationSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationSubscription"> | Date | string
  }

  export type UserPreferencesUpsertWithoutUserInput = {
    update: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderLeadTime?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderLeadTime?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMedicationsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicationLogs?: MedicationLogCreateNestedManyWithoutUserInput
    dailyStreaks?: DailyStreakCreateNestedManyWithoutUserInput
    notificationSubscriptions?: NotificationSubscriptionCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMedicationsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicationLogs?: MedicationLogUncheckedCreateNestedManyWithoutUserInput
    dailyStreaks?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    notificationSubscriptions?: NotificationSubscriptionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMedicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
  }

  export type MedicationScheduleCreateWithoutMedicationInput = {
    id?: string
    timeOfDay: string
    daysOfWeek?: MedicationScheduleCreatedaysOfWeekInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationScheduleUncheckedCreateWithoutMedicationInput = {
    id?: string
    timeOfDay: string
    daysOfWeek?: MedicationScheduleCreatedaysOfWeekInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationScheduleCreateOrConnectWithoutMedicationInput = {
    where: MedicationScheduleWhereUniqueInput
    create: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput>
  }

  export type MedicationScheduleCreateManyMedicationInputEnvelope = {
    data: MedicationScheduleCreateManyMedicationInput | MedicationScheduleCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type MedicationLogCreateWithoutMedicationInput = {
    id?: string
    scheduledTime: Date | string
    takenAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicationLogsInput
  }

  export type MedicationLogUncheckedCreateWithoutMedicationInput = {
    id?: string
    userId: string
    scheduledTime: Date | string
    takenAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogCreateOrConnectWithoutMedicationInput = {
    where: MedicationLogWhereUniqueInput
    create: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput>
  }

  export type MedicationLogCreateManyMedicationInputEnvelope = {
    data: MedicationLogCreateManyMedicationInput | MedicationLogCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMedicationsInput = {
    update: XOR<UserUpdateWithoutMedicationsInput, UserUncheckedUpdateWithoutMedicationsInput>
    create: XOR<UserCreateWithoutMedicationsInput, UserUncheckedCreateWithoutMedicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedicationsInput, UserUncheckedUpdateWithoutMedicationsInput>
  }

  export type UserUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationLogs?: MedicationLogUpdateManyWithoutUserNestedInput
    dailyStreaks?: DailyStreakUpdateManyWithoutUserNestedInput
    notificationSubscriptions?: NotificationSubscriptionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationLogs?: MedicationLogUncheckedUpdateManyWithoutUserNestedInput
    dailyStreaks?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    notificationSubscriptions?: NotificationSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MedicationScheduleUpsertWithWhereUniqueWithoutMedicationInput = {
    where: MedicationScheduleWhereUniqueInput
    update: XOR<MedicationScheduleUpdateWithoutMedicationInput, MedicationScheduleUncheckedUpdateWithoutMedicationInput>
    create: XOR<MedicationScheduleCreateWithoutMedicationInput, MedicationScheduleUncheckedCreateWithoutMedicationInput>
  }

  export type MedicationScheduleUpdateWithWhereUniqueWithoutMedicationInput = {
    where: MedicationScheduleWhereUniqueInput
    data: XOR<MedicationScheduleUpdateWithoutMedicationInput, MedicationScheduleUncheckedUpdateWithoutMedicationInput>
  }

  export type MedicationScheduleUpdateManyWithWhereWithoutMedicationInput = {
    where: MedicationScheduleScalarWhereInput
    data: XOR<MedicationScheduleUpdateManyMutationInput, MedicationScheduleUncheckedUpdateManyWithoutMedicationInput>
  }

  export type MedicationScheduleScalarWhereInput = {
    AND?: MedicationScheduleScalarWhereInput | MedicationScheduleScalarWhereInput[]
    OR?: MedicationScheduleScalarWhereInput[]
    NOT?: MedicationScheduleScalarWhereInput | MedicationScheduleScalarWhereInput[]
    id?: StringFilter<"MedicationSchedule"> | string
    medicationId?: StringFilter<"MedicationSchedule"> | string
    timeOfDay?: StringFilter<"MedicationSchedule"> | string
    daysOfWeek?: IntNullableListFilter<"MedicationSchedule">
    createdAt?: DateTimeFilter<"MedicationSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationSchedule"> | Date | string
  }

  export type MedicationLogUpsertWithWhereUniqueWithoutMedicationInput = {
    where: MedicationLogWhereUniqueInput
    update: XOR<MedicationLogUpdateWithoutMedicationInput, MedicationLogUncheckedUpdateWithoutMedicationInput>
    create: XOR<MedicationLogCreateWithoutMedicationInput, MedicationLogUncheckedCreateWithoutMedicationInput>
  }

  export type MedicationLogUpdateWithWhereUniqueWithoutMedicationInput = {
    where: MedicationLogWhereUniqueInput
    data: XOR<MedicationLogUpdateWithoutMedicationInput, MedicationLogUncheckedUpdateWithoutMedicationInput>
  }

  export type MedicationLogUpdateManyWithWhereWithoutMedicationInput = {
    where: MedicationLogScalarWhereInput
    data: XOR<MedicationLogUpdateManyMutationInput, MedicationLogUncheckedUpdateManyWithoutMedicationInput>
  }

  export type MedicationCreateWithoutSchedulesInput = {
    id?: string
    name: string
    description?: string | null
    type?: string
    dosage?: string | null
    frequency?: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicationsInput
    logs?: MedicationLogCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutSchedulesInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    type?: string
    dosage?: string | null
    frequency?: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: MedicationLogUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutSchedulesInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
  }

  export type MedicationUpsertWithoutSchedulesInput = {
    update: XOR<MedicationUpdateWithoutSchedulesInput, MedicationUncheckedUpdateWithoutSchedulesInput>
    create: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutSchedulesInput, MedicationUncheckedUpdateWithoutSchedulesInput>
  }

  export type MedicationUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicationsNestedInput
    logs?: MedicationLogUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: MedicationLogUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type UserCreateWithoutMedicationLogsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationCreateNestedManyWithoutUserInput
    dailyStreaks?: DailyStreakCreateNestedManyWithoutUserInput
    notificationSubscriptions?: NotificationSubscriptionCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMedicationLogsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutUserInput
    dailyStreaks?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    notificationSubscriptions?: NotificationSubscriptionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMedicationLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedicationLogsInput, UserUncheckedCreateWithoutMedicationLogsInput>
  }

  export type MedicationCreateWithoutLogsInput = {
    id?: string
    name: string
    description?: string | null
    type?: string
    dosage?: string | null
    frequency?: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicationsInput
    schedules?: MedicationScheduleCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutLogsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    type?: string
    dosage?: string | null
    frequency?: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: MedicationScheduleUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutLogsInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutLogsInput, MedicationUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutMedicationLogsInput = {
    update: XOR<UserUpdateWithoutMedicationLogsInput, UserUncheckedUpdateWithoutMedicationLogsInput>
    create: XOR<UserCreateWithoutMedicationLogsInput, UserUncheckedCreateWithoutMedicationLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedicationLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedicationLogsInput, UserUncheckedUpdateWithoutMedicationLogsInput>
  }

  export type UserUpdateWithoutMedicationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUpdateManyWithoutUserNestedInput
    dailyStreaks?: DailyStreakUpdateManyWithoutUserNestedInput
    notificationSubscriptions?: NotificationSubscriptionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedicationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutUserNestedInput
    dailyStreaks?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    notificationSubscriptions?: NotificationSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MedicationUpsertWithoutLogsInput = {
    update: XOR<MedicationUpdateWithoutLogsInput, MedicationUncheckedUpdateWithoutLogsInput>
    create: XOR<MedicationCreateWithoutLogsInput, MedicationUncheckedCreateWithoutLogsInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutLogsInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutLogsInput, MedicationUncheckedUpdateWithoutLogsInput>
  }

  export type MedicationUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicationsNestedInput
    schedules?: MedicationScheduleUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: MedicationScheduleUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type UserCreateWithoutDailyStreaksInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationCreateNestedManyWithoutUserInput
    medicationLogs?: MedicationLogCreateNestedManyWithoutUserInput
    notificationSubscriptions?: NotificationSubscriptionCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyStreaksInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutUserInput
    medicationLogs?: MedicationLogUncheckedCreateNestedManyWithoutUserInput
    notificationSubscriptions?: NotificationSubscriptionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyStreaksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyStreaksInput, UserUncheckedCreateWithoutDailyStreaksInput>
  }

  export type UserUpsertWithoutDailyStreaksInput = {
    update: XOR<UserUpdateWithoutDailyStreaksInput, UserUncheckedUpdateWithoutDailyStreaksInput>
    create: XOR<UserCreateWithoutDailyStreaksInput, UserUncheckedCreateWithoutDailyStreaksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyStreaksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyStreaksInput, UserUncheckedUpdateWithoutDailyStreaksInput>
  }

  export type UserUpdateWithoutDailyStreaksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUpdateManyWithoutUserNestedInput
    medicationLogs?: MedicationLogUpdateManyWithoutUserNestedInput
    notificationSubscriptions?: NotificationSubscriptionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyStreaksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutUserNestedInput
    medicationLogs?: MedicationLogUncheckedUpdateManyWithoutUserNestedInput
    notificationSubscriptions?: NotificationSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationCreateNestedManyWithoutUserInput
    medicationLogs?: MedicationLogCreateNestedManyWithoutUserInput
    dailyStreaks?: DailyStreakCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutUserInput
    medicationLogs?: MedicationLogUncheckedCreateNestedManyWithoutUserInput
    dailyStreaks?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationSubscriptionsInput, UserUncheckedCreateWithoutNotificationSubscriptionsInput>
  }

  export type UserUpsertWithoutNotificationSubscriptionsInput = {
    update: XOR<UserUpdateWithoutNotificationSubscriptionsInput, UserUncheckedUpdateWithoutNotificationSubscriptionsInput>
    create: XOR<UserCreateWithoutNotificationSubscriptionsInput, UserUncheckedCreateWithoutNotificationSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationSubscriptionsInput, UserUncheckedUpdateWithoutNotificationSubscriptionsInput>
  }

  export type UserUpdateWithoutNotificationSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUpdateManyWithoutUserNestedInput
    medicationLogs?: MedicationLogUpdateManyWithoutUserNestedInput
    dailyStreaks?: DailyStreakUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutUserNestedInput
    medicationLogs?: MedicationLogUncheckedUpdateManyWithoutUserNestedInput
    dailyStreaks?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationCreateNestedManyWithoutUserInput
    medicationLogs?: MedicationLogCreateNestedManyWithoutUserInput
    dailyStreaks?: DailyStreakCreateNestedManyWithoutUserInput
    notificationSubscriptions?: NotificationSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutUserInput
    medicationLogs?: MedicationLogUncheckedCreateNestedManyWithoutUserInput
    dailyStreaks?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    notificationSubscriptions?: NotificationSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUpdateManyWithoutUserNestedInput
    medicationLogs?: MedicationLogUpdateManyWithoutUserNestedInput
    dailyStreaks?: DailyStreakUpdateManyWithoutUserNestedInput
    notificationSubscriptions?: NotificationSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutUserNestedInput
    medicationLogs?: MedicationLogUncheckedUpdateManyWithoutUserNestedInput
    dailyStreaks?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    notificationSubscriptions?: NotificationSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MedicationCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    type?: string
    dosage?: string | null
    frequency?: number
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogCreateManyUserInput = {
    id?: string
    medicationId: string
    scheduledTime: Date | string
    takenAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyStreakCreateManyUserInput = {
    id?: string
    date: Date | string
    totalDoses?: number
    completedDoses?: number
    missedDoses?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSubscriptionCreateManyUserInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: MedicationScheduleUpdateManyWithoutMedicationNestedInput
    logs?: MedicationLogUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: MedicationScheduleUncheckedUpdateManyWithoutMedicationNestedInput
    logs?: MedicationLogUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutLogsNestedInput
  }

  export type MedicationLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDoses?: IntFieldUpdateOperationsInput | number
    completedDoses?: IntFieldUpdateOperationsInput | number
    missedDoses?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDoses?: IntFieldUpdateOperationsInput | number
    completedDoses?: IntFieldUpdateOperationsInput | number
    missedDoses?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDoses?: IntFieldUpdateOperationsInput | number
    completedDoses?: IntFieldUpdateOperationsInput | number
    missedDoses?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationScheduleCreateManyMedicationInput = {
    id?: string
    timeOfDay: string
    daysOfWeek?: MedicationScheduleCreatedaysOfWeekInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationLogCreateManyMedicationInput = {
    id?: string
    userId: string
    scheduledTime: Date | string
    takenAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationScheduleUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: MedicationScheduleUpdatedaysOfWeekInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationScheduleUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: MedicationScheduleUpdatedaysOfWeekInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationScheduleUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: MedicationScheduleUpdatedaysOfWeekInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicationLogsNestedInput
  }

  export type MedicationLogUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationLogUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicationCountOutputTypeDefaultArgs instead
     */
    export type MedicationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicationDefaultArgs instead
     */
    export type MedicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicationScheduleDefaultArgs instead
     */
    export type MedicationScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicationScheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicationLogDefaultArgs instead
     */
    export type MedicationLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicationLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyStreakDefaultArgs instead
     */
    export type DailyStreakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyStreakDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationSubscriptionDefaultArgs instead
     */
    export type NotificationSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationSubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPreferencesDefaultArgs instead
     */
    export type UserPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPreferencesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}