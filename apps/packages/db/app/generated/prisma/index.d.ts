
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
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model DoctorSpecialization
 * 
 */
export type DoctorSpecialization = $Result.DefaultSelection<Prisma.$DoctorSpecializationPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model Diagnosis
 * 
 */
export type Diagnosis = $Result.DefaultSelection<Prisma.$DiagnosisPayload>
/**
 * Model AIAnalysis
 * 
 */
export type AIAnalysis = $Result.DefaultSelection<Prisma.$AIAnalysisPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Severity: {
  MILD: 'MILD',
  MODERATE: 'MODERATE',
  SEVERE: 'SEVERE',
  CRITICAL: 'CRITICAL'
};

export type Severity = (typeof Severity)[keyof typeof Severity]

}

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorSpecialization`: Exposes CRUD operations for the **DoctorSpecialization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSpecializations
    * const doctorSpecializations = await prisma.doctorSpecialization.findMany()
    * ```
    */
  get doctorSpecialization(): Prisma.DoctorSpecializationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnosis`: Exposes CRUD operations for the **Diagnosis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnoses
    * const diagnoses = await prisma.diagnosis.findMany()
    * ```
    */
  get diagnosis(): Prisma.DiagnosisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIAnalysis`: Exposes CRUD operations for the **AIAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIAnalyses
    * const aIAnalyses = await prisma.aIAnalysis.findMany()
    * ```
    */
  get aIAnalysis(): Prisma.AIAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Doctor: 'Doctor',
    DoctorSpecialization: 'DoctorSpecialization',
    Report: 'Report',
    Diagnosis: 'Diagnosis',
    AIAnalysis: 'AIAnalysis',
    Admin: 'Admin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "doctor" | "doctorSpecialization" | "report" | "diagnosis" | "aIAnalysis" | "admin"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      DoctorSpecialization: {
        payload: Prisma.$DoctorSpecializationPayload<ExtArgs>
        fields: Prisma.DoctorSpecializationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorSpecializationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          findFirst: {
            args: Prisma.DoctorSpecializationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorSpecializationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          findMany: {
            args: Prisma.DoctorSpecializationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>[]
          }
          create: {
            args: Prisma.DoctorSpecializationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          createMany: {
            args: Prisma.DoctorSpecializationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorSpecializationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>[]
          }
          delete: {
            args: Prisma.DoctorSpecializationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          update: {
            args: Prisma.DoctorSpecializationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          deleteMany: {
            args: Prisma.DoctorSpecializationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorSpecializationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorSpecializationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>[]
          }
          upsert: {
            args: Prisma.DoctorSpecializationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          aggregate: {
            args: Prisma.DoctorSpecializationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorSpecialization>
          }
          groupBy: {
            args: Prisma.DoctorSpecializationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecializationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorSpecializationCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecializationCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      Diagnosis: {
        payload: Prisma.$DiagnosisPayload<ExtArgs>
        fields: Prisma.DiagnosisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          findFirst: {
            args: Prisma.DiagnosisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          findMany: {
            args: Prisma.DiagnosisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>[]
          }
          create: {
            args: Prisma.DiagnosisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          createMany: {
            args: Prisma.DiagnosisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiagnosisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>[]
          }
          delete: {
            args: Prisma.DiagnosisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          update: {
            args: Prisma.DiagnosisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiagnosisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>[]
          }
          upsert: {
            args: Prisma.DiagnosisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          aggregate: {
            args: Prisma.DiagnosisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosis>
          }
          groupBy: {
            args: Prisma.DiagnosisGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosisGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosisCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosisCountAggregateOutputType> | number
          }
        }
      }
      AIAnalysis: {
        payload: Prisma.$AIAnalysisPayload<ExtArgs>
        fields: Prisma.AIAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          findFirst: {
            args: Prisma.AIAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          findMany: {
            args: Prisma.AIAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>[]
          }
          create: {
            args: Prisma.AIAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          createMany: {
            args: Prisma.AIAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>[]
          }
          delete: {
            args: Prisma.AIAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          update: {
            args: Prisma.AIAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.AIAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.AIAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          aggregate: {
            args: Prisma.AIAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIAnalysis>
          }
          groupBy: {
            args: Prisma.AIAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<AIAnalysisCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    doctor?: DoctorOmit
    doctorSpecialization?: DoctorSpecializationOmit
    report?: ReportOmit
    diagnosis?: DiagnosisOmit
    aIAnalysis?: AIAnalysisOmit
    admin?: AdminOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    reports: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | UserCountOutputTypeCountReportsArgs
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
  export type UserCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    reports: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | DoctorCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Count Type DoctorSpecializationCountOutputType
   */

  export type DoctorSpecializationCountOutputType = {
    doctors: number
  }

  export type DoctorSpecializationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | DoctorSpecializationCountOutputTypeCountDoctorsArgs
  }

  // Custom InputTypes
  /**
   * DoctorSpecializationCountOutputType without action
   */
  export type DoctorSpecializationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecializationCountOutputType
     */
    select?: DoctorSpecializationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorSpecializationCountOutputType without action
   */
  export type DoctorSpecializationCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
  }


  /**
   * Count Type ReportCountOutputType
   */

  export type ReportCountOutputType = {
    diagnosis: number
  }

  export type ReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosis?: boolean | ReportCountOutputTypeCountDiagnosisArgs
  }

  // Custom InputTypes
  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCountOutputType
     */
    select?: ReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountDiagnosisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosisWhereInput
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
    authUserId: string | null
    name: string | null
    email: string | null
    disease: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    authUserId: string | null
    name: string | null
    email: string | null
    disease: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    authUserId: number
    name: number
    email: number
    disease: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    authUserId?: true
    name?: true
    email?: true
    disease?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    authUserId?: true
    name?: true
    email?: true
    disease?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    authUserId?: true
    name?: true
    email?: true
    disease?: true
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
    authUserId: string
    name: string
    email: string
    disease: string | null
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
    authUserId?: boolean
    name?: boolean
    email?: boolean
    disease?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reports?: boolean | User$reportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    name?: boolean
    email?: boolean
    disease?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    name?: boolean
    email?: boolean
    disease?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    authUserId?: boolean
    name?: boolean
    email?: boolean
    disease?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authUserId" | "name" | "email" | "disease" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | User$reportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reports: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authUserId: string
      name: string
      email: string
      disease: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reports<T extends User$reportsArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly authUserId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly disease: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reports
   */
  export type User$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    authUserId: string | null
    name: string | null
    email: string | null
    password: string | null
    proofOfWork: string | null
    trackRecord: string | null
    verified: boolean | null
    specializationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    authUserId: string | null
    name: string | null
    email: string | null
    password: string | null
    proofOfWork: string | null
    trackRecord: string | null
    verified: boolean | null
    specializationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    authUserId: number
    name: number
    email: number
    password: number
    proofOfWork: number
    trackRecord: number
    verified: number
    specializationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    authUserId?: true
    name?: true
    email?: true
    password?: true
    proofOfWork?: true
    trackRecord?: true
    verified?: true
    specializationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    authUserId?: true
    name?: true
    email?: true
    password?: true
    proofOfWork?: true
    trackRecord?: true
    verified?: true
    specializationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    authUserId?: true
    name?: true
    email?: true
    password?: true
    proofOfWork?: true
    trackRecord?: true
    verified?: true
    specializationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    authUserId: string
    name: string
    email: string
    password: string | null
    proofOfWork: string | null
    trackRecord: string | null
    verified: boolean
    specializationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    proofOfWork?: boolean
    trackRecord?: boolean
    verified?: boolean
    specializationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    specialization?: boolean | Doctor$specializationArgs<ExtArgs>
    reports?: boolean | Doctor$reportsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    proofOfWork?: boolean
    trackRecord?: boolean
    verified?: boolean
    specializationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    specialization?: boolean | Doctor$specializationArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    proofOfWork?: boolean
    trackRecord?: boolean
    verified?: boolean
    specializationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    specialization?: boolean | Doctor$specializationArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    authUserId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    proofOfWork?: boolean
    trackRecord?: boolean
    verified?: boolean
    specializationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authUserId" | "name" | "email" | "password" | "proofOfWork" | "trackRecord" | "verified" | "specializationId" | "createdAt" | "updatedAt", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialization?: boolean | Doctor$specializationArgs<ExtArgs>
    reports?: boolean | Doctor$reportsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialization?: boolean | Doctor$specializationArgs<ExtArgs>
  }
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialization?: boolean | Doctor$specializationArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      specialization: Prisma.$DoctorSpecializationPayload<ExtArgs> | null
      reports: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authUserId: string
      name: string
      email: string
      password: string | null
      proofOfWork: string | null
      trackRecord: string | null
      verified: boolean
      specializationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialization<T extends Doctor$specializationArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$specializationArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reports<T extends Doctor$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly authUserId: FieldRef<"Doctor", 'String'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly email: FieldRef<"Doctor", 'String'>
    readonly password: FieldRef<"Doctor", 'String'>
    readonly proofOfWork: FieldRef<"Doctor", 'String'>
    readonly trackRecord: FieldRef<"Doctor", 'String'>
    readonly verified: FieldRef<"Doctor", 'Boolean'>
    readonly specializationId: FieldRef<"Doctor", 'String'>
    readonly createdAt: FieldRef<"Doctor", 'DateTime'>
    readonly updatedAt: FieldRef<"Doctor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.specialization
   */
  export type Doctor$specializationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    where?: DoctorSpecializationWhereInput
  }

  /**
   * Doctor.reports
   */
  export type Doctor$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSpecialization
   */

  export type AggregateDoctorSpecialization = {
    _count: DoctorSpecializationCountAggregateOutputType | null
    _min: DoctorSpecializationMinAggregateOutputType | null
    _max: DoctorSpecializationMaxAggregateOutputType | null
  }

  export type DoctorSpecializationMinAggregateOutputType = {
    id: string | null
    type: string | null
    description: string | null
  }

  export type DoctorSpecializationMaxAggregateOutputType = {
    id: string | null
    type: string | null
    description: string | null
  }

  export type DoctorSpecializationCountAggregateOutputType = {
    id: number
    type: number
    description: number
    _all: number
  }


  export type DoctorSpecializationMinAggregateInputType = {
    id?: true
    type?: true
    description?: true
  }

  export type DoctorSpecializationMaxAggregateInputType = {
    id?: true
    type?: true
    description?: true
  }

  export type DoctorSpecializationCountAggregateInputType = {
    id?: true
    type?: true
    description?: true
    _all?: true
  }

  export type DoctorSpecializationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecialization to aggregate.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSpecializations
    **/
    _count?: true | DoctorSpecializationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorSpecializationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorSpecializationMaxAggregateInputType
  }

  export type GetDoctorSpecializationAggregateType<T extends DoctorSpecializationAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSpecialization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSpecialization[P]>
      : GetScalarType<T[P], AggregateDoctorSpecialization[P]>
  }




  export type DoctorSpecializationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecializationWhereInput
    orderBy?: DoctorSpecializationOrderByWithAggregationInput | DoctorSpecializationOrderByWithAggregationInput[]
    by: DoctorSpecializationScalarFieldEnum[] | DoctorSpecializationScalarFieldEnum
    having?: DoctorSpecializationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorSpecializationCountAggregateInputType | true
    _min?: DoctorSpecializationMinAggregateInputType
    _max?: DoctorSpecializationMaxAggregateInputType
  }

  export type DoctorSpecializationGroupByOutputType = {
    id: string
    type: string
    description: string | null
    _count: DoctorSpecializationCountAggregateOutputType | null
    _min: DoctorSpecializationMinAggregateOutputType | null
    _max: DoctorSpecializationMaxAggregateOutputType | null
  }

  type GetDoctorSpecializationGroupByPayload<T extends DoctorSpecializationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorSpecializationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorSpecializationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorSpecializationGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorSpecializationGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSpecializationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    doctors?: boolean | DoctorSpecialization$doctorsArgs<ExtArgs>
    _count?: boolean | DoctorSpecializationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialization"]>

  export type DoctorSpecializationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
  }, ExtArgs["result"]["doctorSpecialization"]>

  export type DoctorSpecializationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
  }, ExtArgs["result"]["doctorSpecialization"]>

  export type DoctorSpecializationSelectScalar = {
    id?: boolean
    type?: boolean
    description?: boolean
  }

  export type DoctorSpecializationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "description", ExtArgs["result"]["doctorSpecialization"]>
  export type DoctorSpecializationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | DoctorSpecialization$doctorsArgs<ExtArgs>
    _count?: boolean | DoctorSpecializationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorSpecializationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DoctorSpecializationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DoctorSpecializationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSpecialization"
    objects: {
      doctors: Prisma.$DoctorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      description: string | null
    }, ExtArgs["result"]["doctorSpecialization"]>
    composites: {}
  }

  type DoctorSpecializationGetPayload<S extends boolean | null | undefined | DoctorSpecializationDefaultArgs> = $Result.GetResult<Prisma.$DoctorSpecializationPayload, S>

  type DoctorSpecializationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorSpecializationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorSpecializationCountAggregateInputType | true
    }

  export interface DoctorSpecializationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSpecialization'], meta: { name: 'DoctorSpecialization' } }
    /**
     * Find zero or one DoctorSpecialization that matches the filter.
     * @param {DoctorSpecializationFindUniqueArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorSpecializationFindUniqueArgs>(args: SelectSubset<T, DoctorSpecializationFindUniqueArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorSpecialization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorSpecializationFindUniqueOrThrowArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorSpecializationFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindFirstArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorSpecializationFindFirstArgs>(args?: SelectSubset<T, DoctorSpecializationFindFirstArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindFirstOrThrowArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorSpecializationFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorSpecializationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorSpecializations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSpecializations
     * const doctorSpecializations = await prisma.doctorSpecialization.findMany()
     * 
     * // Get first 10 DoctorSpecializations
     * const doctorSpecializations = await prisma.doctorSpecialization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorSpecializationWithIdOnly = await prisma.doctorSpecialization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorSpecializationFindManyArgs>(args?: SelectSubset<T, DoctorSpecializationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorSpecialization.
     * @param {DoctorSpecializationCreateArgs} args - Arguments to create a DoctorSpecialization.
     * @example
     * // Create one DoctorSpecialization
     * const DoctorSpecialization = await prisma.doctorSpecialization.create({
     *   data: {
     *     // ... data to create a DoctorSpecialization
     *   }
     * })
     * 
     */
    create<T extends DoctorSpecializationCreateArgs>(args: SelectSubset<T, DoctorSpecializationCreateArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorSpecializations.
     * @param {DoctorSpecializationCreateManyArgs} args - Arguments to create many DoctorSpecializations.
     * @example
     * // Create many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorSpecializationCreateManyArgs>(args?: SelectSubset<T, DoctorSpecializationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorSpecializations and returns the data saved in the database.
     * @param {DoctorSpecializationCreateManyAndReturnArgs} args - Arguments to create many DoctorSpecializations.
     * @example
     * // Create many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorSpecializations and only return the `id`
     * const doctorSpecializationWithIdOnly = await prisma.doctorSpecialization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorSpecializationCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorSpecializationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorSpecialization.
     * @param {DoctorSpecializationDeleteArgs} args - Arguments to delete one DoctorSpecialization.
     * @example
     * // Delete one DoctorSpecialization
     * const DoctorSpecialization = await prisma.doctorSpecialization.delete({
     *   where: {
     *     // ... filter to delete one DoctorSpecialization
     *   }
     * })
     * 
     */
    delete<T extends DoctorSpecializationDeleteArgs>(args: SelectSubset<T, DoctorSpecializationDeleteArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorSpecialization.
     * @param {DoctorSpecializationUpdateArgs} args - Arguments to update one DoctorSpecialization.
     * @example
     * // Update one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorSpecializationUpdateArgs>(args: SelectSubset<T, DoctorSpecializationUpdateArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorSpecializations.
     * @param {DoctorSpecializationDeleteManyArgs} args - Arguments to filter DoctorSpecializations to delete.
     * @example
     * // Delete a few DoctorSpecializations
     * const { count } = await prisma.doctorSpecialization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorSpecializationDeleteManyArgs>(args?: SelectSubset<T, DoctorSpecializationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorSpecializationUpdateManyArgs>(args: SelectSubset<T, DoctorSpecializationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecializations and returns the data updated in the database.
     * @param {DoctorSpecializationUpdateManyAndReturnArgs} args - Arguments to update many DoctorSpecializations.
     * @example
     * // Update many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorSpecializations and only return the `id`
     * const doctorSpecializationWithIdOnly = await prisma.doctorSpecialization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorSpecializationUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorSpecializationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorSpecialization.
     * @param {DoctorSpecializationUpsertArgs} args - Arguments to update or create a DoctorSpecialization.
     * @example
     * // Update or create a DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.upsert({
     *   create: {
     *     // ... data to create a DoctorSpecialization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSpecialization we want to update
     *   }
     * })
     */
    upsert<T extends DoctorSpecializationUpsertArgs>(args: SelectSubset<T, DoctorSpecializationUpsertArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorSpecializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationCountArgs} args - Arguments to filter DoctorSpecializations to count.
     * @example
     * // Count the number of DoctorSpecializations
     * const count = await prisma.doctorSpecialization.count({
     *   where: {
     *     // ... the filter for the DoctorSpecializations we want to count
     *   }
     * })
    **/
    count<T extends DoctorSpecializationCountArgs>(
      args?: Subset<T, DoctorSpecializationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorSpecializationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSpecialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorSpecializationAggregateArgs>(args: Subset<T, DoctorSpecializationAggregateArgs>): Prisma.PrismaPromise<GetDoctorSpecializationAggregateType<T>>

    /**
     * Group by DoctorSpecialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationGroupByArgs} args - Group by arguments.
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
      T extends DoctorSpecializationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorSpecializationGroupByArgs['orderBy'] }
        : { orderBy?: DoctorSpecializationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorSpecializationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSpecializationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSpecialization model
   */
  readonly fields: DoctorSpecializationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSpecialization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorSpecializationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctors<T extends DoctorSpecialization$doctorsArgs<ExtArgs> = {}>(args?: Subset<T, DoctorSpecialization$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DoctorSpecialization model
   */
  interface DoctorSpecializationFieldRefs {
    readonly id: FieldRef<"DoctorSpecialization", 'String'>
    readonly type: FieldRef<"DoctorSpecialization", 'String'>
    readonly description: FieldRef<"DoctorSpecialization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSpecialization findUnique
   */
  export type DoctorSpecializationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization findUniqueOrThrow
   */
  export type DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization findFirst
   */
  export type DoctorSpecializationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecializations.
     */
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization findFirstOrThrow
   */
  export type DoctorSpecializationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecializations.
     */
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization findMany
   */
  export type DoctorSpecializationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecializations to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization create
   */
  export type DoctorSpecializationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSpecialization.
     */
    data: XOR<DoctorSpecializationCreateInput, DoctorSpecializationUncheckedCreateInput>
  }

  /**
   * DoctorSpecialization createMany
   */
  export type DoctorSpecializationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSpecializations.
     */
    data: DoctorSpecializationCreateManyInput | DoctorSpecializationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSpecialization createManyAndReturn
   */
  export type DoctorSpecializationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorSpecializations.
     */
    data: DoctorSpecializationCreateManyInput | DoctorSpecializationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSpecialization update
   */
  export type DoctorSpecializationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSpecialization.
     */
    data: XOR<DoctorSpecializationUpdateInput, DoctorSpecializationUncheckedUpdateInput>
    /**
     * Choose, which DoctorSpecialization to update.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization updateMany
   */
  export type DoctorSpecializationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSpecializations.
     */
    data: XOR<DoctorSpecializationUpdateManyMutationInput, DoctorSpecializationUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSpecializations to update
     */
    where?: DoctorSpecializationWhereInput
    /**
     * Limit how many DoctorSpecializations to update.
     */
    limit?: number
  }

  /**
   * DoctorSpecialization updateManyAndReturn
   */
  export type DoctorSpecializationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * The data used to update DoctorSpecializations.
     */
    data: XOR<DoctorSpecializationUpdateManyMutationInput, DoctorSpecializationUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSpecializations to update
     */
    where?: DoctorSpecializationWhereInput
    /**
     * Limit how many DoctorSpecializations to update.
     */
    limit?: number
  }

  /**
   * DoctorSpecialization upsert
   */
  export type DoctorSpecializationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSpecialization to update in case it exists.
     */
    where: DoctorSpecializationWhereUniqueInput
    /**
     * In case the DoctorSpecialization found by the `where` argument doesn't exist, create a new DoctorSpecialization with this data.
     */
    create: XOR<DoctorSpecializationCreateInput, DoctorSpecializationUncheckedCreateInput>
    /**
     * In case the DoctorSpecialization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorSpecializationUpdateInput, DoctorSpecializationUncheckedUpdateInput>
  }

  /**
   * DoctorSpecialization delete
   */
  export type DoctorSpecializationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter which DoctorSpecialization to delete.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization deleteMany
   */
  export type DoctorSpecializationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecializations to delete
     */
    where?: DoctorSpecializationWhereInput
    /**
     * Limit how many DoctorSpecializations to delete.
     */
    limit?: number
  }

  /**
   * DoctorSpecialization.doctors
   */
  export type DoctorSpecialization$doctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    cursor?: DoctorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization without action
   */
  export type DoctorSpecializationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    reportText: string | null
    date: Date | null
    confirmed: boolean | null
    severity: $Enums.Severity | null
    userId: string | null
    doctorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    reportText: string | null
    date: Date | null
    confirmed: boolean | null
    severity: $Enums.Severity | null
    userId: string | null
    doctorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    imageUrl: number
    reportText: number
    date: number
    confirmed: number
    severity: number
    userId: number
    doctorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    imageUrl?: true
    reportText?: true
    date?: true
    confirmed?: true
    severity?: true
    userId?: true
    doctorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    reportText?: true
    date?: true
    confirmed?: true
    severity?: true
    userId?: true
    doctorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    imageUrl?: true
    reportText?: true
    date?: true
    confirmed?: true
    severity?: true
    userId?: true
    doctorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    imageUrl: string
    reportText: string | null
    date: Date
    confirmed: boolean
    severity: $Enums.Severity | null
    userId: string
    doctorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    reportText?: boolean
    date?: boolean
    confirmed?: boolean
    severity?: boolean
    userId?: boolean
    doctorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiAnalysis?: boolean | Report$aiAnalysisArgs<ExtArgs>
    diagnosis?: boolean | Report$diagnosisArgs<ExtArgs>
    doctor?: boolean | Report$doctorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    reportText?: boolean
    date?: boolean
    confirmed?: boolean
    severity?: boolean
    userId?: boolean
    doctorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | Report$doctorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    reportText?: boolean
    date?: boolean
    confirmed?: boolean
    severity?: boolean
    userId?: boolean
    doctorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | Report$doctorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    reportText?: boolean
    date?: boolean
    confirmed?: boolean
    severity?: boolean
    userId?: boolean
    doctorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "reportText" | "date" | "confirmed" | "severity" | "userId" | "doctorId" | "createdAt" | "updatedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiAnalysis?: boolean | Report$aiAnalysisArgs<ExtArgs>
    diagnosis?: boolean | Report$diagnosisArgs<ExtArgs>
    doctor?: boolean | Report$doctorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | Report$doctorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | Report$doctorArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      aiAnalysis: Prisma.$AIAnalysisPayload<ExtArgs> | null
      diagnosis: Prisma.$DiagnosisPayload<ExtArgs>[]
      doctor: Prisma.$DoctorPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      reportText: string | null
      date: Date
      confirmed: boolean
      severity: $Enums.Severity | null
      userId: string
      doctorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiAnalysis<T extends Report$aiAnalysisArgs<ExtArgs> = {}>(args?: Subset<T, Report$aiAnalysisArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    diagnosis<T extends Report$diagnosisArgs<ExtArgs> = {}>(args?: Subset<T, Report$diagnosisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctor<T extends Report$doctorArgs<ExtArgs> = {}>(args?: Subset<T, Report$doctorArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly imageUrl: FieldRef<"Report", 'String'>
    readonly reportText: FieldRef<"Report", 'String'>
    readonly date: FieldRef<"Report", 'DateTime'>
    readonly confirmed: FieldRef<"Report", 'Boolean'>
    readonly severity: FieldRef<"Report", 'Severity'>
    readonly userId: FieldRef<"Report", 'String'>
    readonly doctorId: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.aiAnalysis
   */
  export type Report$aiAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    where?: AIAnalysisWhereInput
  }

  /**
   * Report.diagnosis
   */
  export type Report$diagnosisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    where?: DiagnosisWhereInput
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    cursor?: DiagnosisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Report.doctor
   */
  export type Report$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model Diagnosis
   */

  export type AggregateDiagnosis = {
    _count: DiagnosisCountAggregateOutputType | null
    _min: DiagnosisMinAggregateOutputType | null
    _max: DiagnosisMaxAggregateOutputType | null
  }

  export type DiagnosisMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    title: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type DiagnosisMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    title: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type DiagnosisCountAggregateOutputType = {
    id: number
    reportId: number
    title: number
    notes: number
    createdAt: number
    _all: number
  }


  export type DiagnosisMinAggregateInputType = {
    id?: true
    reportId?: true
    title?: true
    notes?: true
    createdAt?: true
  }

  export type DiagnosisMaxAggregateInputType = {
    id?: true
    reportId?: true
    title?: true
    notes?: true
    createdAt?: true
  }

  export type DiagnosisCountAggregateInputType = {
    id?: true
    reportId?: true
    title?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type DiagnosisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnosis to aggregate.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnoses
    **/
    _count?: true | DiagnosisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosisMaxAggregateInputType
  }

  export type GetDiagnosisAggregateType<T extends DiagnosisAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosis[P]>
      : GetScalarType<T[P], AggregateDiagnosis[P]>
  }




  export type DiagnosisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosisWhereInput
    orderBy?: DiagnosisOrderByWithAggregationInput | DiagnosisOrderByWithAggregationInput[]
    by: DiagnosisScalarFieldEnum[] | DiagnosisScalarFieldEnum
    having?: DiagnosisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosisCountAggregateInputType | true
    _min?: DiagnosisMinAggregateInputType
    _max?: DiagnosisMaxAggregateInputType
  }

  export type DiagnosisGroupByOutputType = {
    id: string
    reportId: string
    title: string
    notes: string | null
    createdAt: Date
    _count: DiagnosisCountAggregateOutputType | null
    _min: DiagnosisMinAggregateOutputType | null
    _max: DiagnosisMaxAggregateOutputType | null
  }

  type GetDiagnosisGroupByPayload<T extends DiagnosisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosisGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosisGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    title?: boolean
    notes?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosis"]>

  export type DiagnosisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    title?: boolean
    notes?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosis"]>

  export type DiagnosisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    title?: boolean
    notes?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosis"]>

  export type DiagnosisSelectScalar = {
    id?: boolean
    reportId?: boolean
    title?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type DiagnosisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "title" | "notes" | "createdAt", ExtArgs["result"]["diagnosis"]>
  export type DiagnosisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type DiagnosisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type DiagnosisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }

  export type $DiagnosisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnosis"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      title: string
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["diagnosis"]>
    composites: {}
  }

  type DiagnosisGetPayload<S extends boolean | null | undefined | DiagnosisDefaultArgs> = $Result.GetResult<Prisma.$DiagnosisPayload, S>

  type DiagnosisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosisCountAggregateInputType | true
    }

  export interface DiagnosisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnosis'], meta: { name: 'Diagnosis' } }
    /**
     * Find zero or one Diagnosis that matches the filter.
     * @param {DiagnosisFindUniqueArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosisFindUniqueArgs>(args: SelectSubset<T, DiagnosisFindUniqueArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnosis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosisFindUniqueOrThrowArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosisFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnosis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindFirstArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosisFindFirstArgs>(args?: SelectSubset<T, DiagnosisFindFirstArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnosis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindFirstOrThrowArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosisFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosisFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnoses
     * const diagnoses = await prisma.diagnosis.findMany()
     * 
     * // Get first 10 Diagnoses
     * const diagnoses = await prisma.diagnosis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosisWithIdOnly = await prisma.diagnosis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosisFindManyArgs>(args?: SelectSubset<T, DiagnosisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnosis.
     * @param {DiagnosisCreateArgs} args - Arguments to create a Diagnosis.
     * @example
     * // Create one Diagnosis
     * const Diagnosis = await prisma.diagnosis.create({
     *   data: {
     *     // ... data to create a Diagnosis
     *   }
     * })
     * 
     */
    create<T extends DiagnosisCreateArgs>(args: SelectSubset<T, DiagnosisCreateArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnoses.
     * @param {DiagnosisCreateManyArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnosis = await prisma.diagnosis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosisCreateManyArgs>(args?: SelectSubset<T, DiagnosisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnoses and returns the data saved in the database.
     * @param {DiagnosisCreateManyAndReturnArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnosis = await prisma.diagnosis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnoses and only return the `id`
     * const diagnosisWithIdOnly = await prisma.diagnosis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiagnosisCreateManyAndReturnArgs>(args?: SelectSubset<T, DiagnosisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnosis.
     * @param {DiagnosisDeleteArgs} args - Arguments to delete one Diagnosis.
     * @example
     * // Delete one Diagnosis
     * const Diagnosis = await prisma.diagnosis.delete({
     *   where: {
     *     // ... filter to delete one Diagnosis
     *   }
     * })
     * 
     */
    delete<T extends DiagnosisDeleteArgs>(args: SelectSubset<T, DiagnosisDeleteArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnosis.
     * @param {DiagnosisUpdateArgs} args - Arguments to update one Diagnosis.
     * @example
     * // Update one Diagnosis
     * const diagnosis = await prisma.diagnosis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosisUpdateArgs>(args: SelectSubset<T, DiagnosisUpdateArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnoses.
     * @param {DiagnosisDeleteManyArgs} args - Arguments to filter Diagnoses to delete.
     * @example
     * // Delete a few Diagnoses
     * const { count } = await prisma.diagnosis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosisDeleteManyArgs>(args?: SelectSubset<T, DiagnosisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnoses
     * const diagnosis = await prisma.diagnosis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosisUpdateManyArgs>(args: SelectSubset<T, DiagnosisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses and returns the data updated in the database.
     * @param {DiagnosisUpdateManyAndReturnArgs} args - Arguments to update many Diagnoses.
     * @example
     * // Update many Diagnoses
     * const diagnosis = await prisma.diagnosis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnoses and only return the `id`
     * const diagnosisWithIdOnly = await prisma.diagnosis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiagnosisUpdateManyAndReturnArgs>(args: SelectSubset<T, DiagnosisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnosis.
     * @param {DiagnosisUpsertArgs} args - Arguments to update or create a Diagnosis.
     * @example
     * // Update or create a Diagnosis
     * const diagnosis = await prisma.diagnosis.upsert({
     *   create: {
     *     // ... data to create a Diagnosis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnosis we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosisUpsertArgs>(args: SelectSubset<T, DiagnosisUpsertArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisCountArgs} args - Arguments to filter Diagnoses to count.
     * @example
     * // Count the number of Diagnoses
     * const count = await prisma.diagnosis.count({
     *   where: {
     *     // ... the filter for the Diagnoses we want to count
     *   }
     * })
    **/
    count<T extends DiagnosisCountArgs>(
      args?: Subset<T, DiagnosisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnosis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosisAggregateArgs>(args: Subset<T, DiagnosisAggregateArgs>): Prisma.PrismaPromise<GetDiagnosisAggregateType<T>>

    /**
     * Group by Diagnosis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisGroupByArgs} args - Group by arguments.
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
      T extends DiagnosisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosisGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnosis model
   */
  readonly fields: DiagnosisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnosis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportDefaultArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Diagnosis model
   */
  interface DiagnosisFieldRefs {
    readonly id: FieldRef<"Diagnosis", 'String'>
    readonly reportId: FieldRef<"Diagnosis", 'String'>
    readonly title: FieldRef<"Diagnosis", 'String'>
    readonly notes: FieldRef<"Diagnosis", 'String'>
    readonly createdAt: FieldRef<"Diagnosis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Diagnosis findUnique
   */
  export type DiagnosisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis findUniqueOrThrow
   */
  export type DiagnosisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis findFirst
   */
  export type DiagnosisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Diagnosis findFirstOrThrow
   */
  export type DiagnosisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Diagnosis findMany
   */
  export type DiagnosisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnoses.
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Diagnosis create
   */
  export type DiagnosisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnosis.
     */
    data: XOR<DiagnosisCreateInput, DiagnosisUncheckedCreateInput>
  }

  /**
   * Diagnosis createMany
   */
  export type DiagnosisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnoses.
     */
    data: DiagnosisCreateManyInput | DiagnosisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diagnosis createManyAndReturn
   */
  export type DiagnosisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * The data used to create many Diagnoses.
     */
    data: DiagnosisCreateManyInput | DiagnosisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnosis update
   */
  export type DiagnosisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnosis.
     */
    data: XOR<DiagnosisUpdateInput, DiagnosisUncheckedUpdateInput>
    /**
     * Choose, which Diagnosis to update.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis updateMany
   */
  export type DiagnosisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnoses.
     */
    data: XOR<DiagnosisUpdateManyMutationInput, DiagnosisUncheckedUpdateManyInput>
    /**
     * Filter which Diagnoses to update
     */
    where?: DiagnosisWhereInput
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number
  }

  /**
   * Diagnosis updateManyAndReturn
   */
  export type DiagnosisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * The data used to update Diagnoses.
     */
    data: XOR<DiagnosisUpdateManyMutationInput, DiagnosisUncheckedUpdateManyInput>
    /**
     * Filter which Diagnoses to update
     */
    where?: DiagnosisWhereInput
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnosis upsert
   */
  export type DiagnosisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnosis to update in case it exists.
     */
    where: DiagnosisWhereUniqueInput
    /**
     * In case the Diagnosis found by the `where` argument doesn't exist, create a new Diagnosis with this data.
     */
    create: XOR<DiagnosisCreateInput, DiagnosisUncheckedCreateInput>
    /**
     * In case the Diagnosis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosisUpdateInput, DiagnosisUncheckedUpdateInput>
  }

  /**
   * Diagnosis delete
   */
  export type DiagnosisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter which Diagnosis to delete.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis deleteMany
   */
  export type DiagnosisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnoses to delete
     */
    where?: DiagnosisWhereInput
    /**
     * Limit how many Diagnoses to delete.
     */
    limit?: number
  }

  /**
   * Diagnosis without action
   */
  export type DiagnosisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
  }


  /**
   * Model AIAnalysis
   */

  export type AggregateAIAnalysis = {
    _count: AIAnalysisCountAggregateOutputType | null
    _avg: AIAnalysisAvgAggregateOutputType | null
    _sum: AIAnalysisSumAggregateOutputType | null
    _min: AIAnalysisMinAggregateOutputType | null
    _max: AIAnalysisMaxAggregateOutputType | null
  }

  export type AIAnalysisAvgAggregateOutputType = {
    confidence: number | null
  }

  export type AIAnalysisSumAggregateOutputType = {
    confidence: number | null
  }

  export type AIAnalysisMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    findings: string | null
    confidence: number | null
    createdAt: Date | null
  }

  export type AIAnalysisMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    findings: string | null
    confidence: number | null
    createdAt: Date | null
  }

  export type AIAnalysisCountAggregateOutputType = {
    id: number
    reportId: number
    findings: number
    confidence: number
    createdAt: number
    _all: number
  }


  export type AIAnalysisAvgAggregateInputType = {
    confidence?: true
  }

  export type AIAnalysisSumAggregateInputType = {
    confidence?: true
  }

  export type AIAnalysisMinAggregateInputType = {
    id?: true
    reportId?: true
    findings?: true
    confidence?: true
    createdAt?: true
  }

  export type AIAnalysisMaxAggregateInputType = {
    id?: true
    reportId?: true
    findings?: true
    confidence?: true
    createdAt?: true
  }

  export type AIAnalysisCountAggregateInputType = {
    id?: true
    reportId?: true
    findings?: true
    confidence?: true
    createdAt?: true
    _all?: true
  }

  export type AIAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIAnalysis to aggregate.
     */
    where?: AIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIAnalyses to fetch.
     */
    orderBy?: AIAnalysisOrderByWithRelationInput | AIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIAnalyses
    **/
    _count?: true | AIAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIAnalysisMaxAggregateInputType
  }

  export type GetAIAnalysisAggregateType<T extends AIAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateAIAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIAnalysis[P]>
      : GetScalarType<T[P], AggregateAIAnalysis[P]>
  }




  export type AIAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIAnalysisWhereInput
    orderBy?: AIAnalysisOrderByWithAggregationInput | AIAnalysisOrderByWithAggregationInput[]
    by: AIAnalysisScalarFieldEnum[] | AIAnalysisScalarFieldEnum
    having?: AIAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIAnalysisCountAggregateInputType | true
    _avg?: AIAnalysisAvgAggregateInputType
    _sum?: AIAnalysisSumAggregateInputType
    _min?: AIAnalysisMinAggregateInputType
    _max?: AIAnalysisMaxAggregateInputType
  }

  export type AIAnalysisGroupByOutputType = {
    id: string
    reportId: string
    findings: string
    confidence: number | null
    createdAt: Date
    _count: AIAnalysisCountAggregateOutputType | null
    _avg: AIAnalysisAvgAggregateOutputType | null
    _sum: AIAnalysisSumAggregateOutputType | null
    _min: AIAnalysisMinAggregateOutputType | null
    _max: AIAnalysisMaxAggregateOutputType | null
  }

  type GetAIAnalysisGroupByPayload<T extends AIAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], AIAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type AIAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    findings?: boolean
    confidence?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIAnalysis"]>

  export type AIAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    findings?: boolean
    confidence?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIAnalysis"]>

  export type AIAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    findings?: boolean
    confidence?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIAnalysis"]>

  export type AIAnalysisSelectScalar = {
    id?: boolean
    reportId?: boolean
    findings?: boolean
    confidence?: boolean
    createdAt?: boolean
  }

  export type AIAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "findings" | "confidence" | "createdAt", ExtArgs["result"]["aIAnalysis"]>
  export type AIAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type AIAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type AIAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }

  export type $AIAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIAnalysis"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      findings: string
      confidence: number | null
      createdAt: Date
    }, ExtArgs["result"]["aIAnalysis"]>
    composites: {}
  }

  type AIAnalysisGetPayload<S extends boolean | null | undefined | AIAnalysisDefaultArgs> = $Result.GetResult<Prisma.$AIAnalysisPayload, S>

  type AIAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIAnalysisCountAggregateInputType | true
    }

  export interface AIAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIAnalysis'], meta: { name: 'AIAnalysis' } }
    /**
     * Find zero or one AIAnalysis that matches the filter.
     * @param {AIAnalysisFindUniqueArgs} args - Arguments to find a AIAnalysis
     * @example
     * // Get one AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIAnalysisFindUniqueArgs>(args: SelectSubset<T, AIAnalysisFindUniqueArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIAnalysisFindUniqueOrThrowArgs} args - Arguments to find a AIAnalysis
     * @example
     * // Get one AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, AIAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisFindFirstArgs} args - Arguments to find a AIAnalysis
     * @example
     * // Get one AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIAnalysisFindFirstArgs>(args?: SelectSubset<T, AIAnalysisFindFirstArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisFindFirstOrThrowArgs} args - Arguments to find a AIAnalysis
     * @example
     * // Get one AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, AIAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIAnalyses
     * const aIAnalyses = await prisma.aIAnalysis.findMany()
     * 
     * // Get first 10 AIAnalyses
     * const aIAnalyses = await prisma.aIAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIAnalysisWithIdOnly = await prisma.aIAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIAnalysisFindManyArgs>(args?: SelectSubset<T, AIAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIAnalysis.
     * @param {AIAnalysisCreateArgs} args - Arguments to create a AIAnalysis.
     * @example
     * // Create one AIAnalysis
     * const AIAnalysis = await prisma.aIAnalysis.create({
     *   data: {
     *     // ... data to create a AIAnalysis
     *   }
     * })
     * 
     */
    create<T extends AIAnalysisCreateArgs>(args: SelectSubset<T, AIAnalysisCreateArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIAnalyses.
     * @param {AIAnalysisCreateManyArgs} args - Arguments to create many AIAnalyses.
     * @example
     * // Create many AIAnalyses
     * const aIAnalysis = await prisma.aIAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIAnalysisCreateManyArgs>(args?: SelectSubset<T, AIAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIAnalyses and returns the data saved in the database.
     * @param {AIAnalysisCreateManyAndReturnArgs} args - Arguments to create many AIAnalyses.
     * @example
     * // Create many AIAnalyses
     * const aIAnalysis = await prisma.aIAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIAnalyses and only return the `id`
     * const aIAnalysisWithIdOnly = await prisma.aIAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, AIAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIAnalysis.
     * @param {AIAnalysisDeleteArgs} args - Arguments to delete one AIAnalysis.
     * @example
     * // Delete one AIAnalysis
     * const AIAnalysis = await prisma.aIAnalysis.delete({
     *   where: {
     *     // ... filter to delete one AIAnalysis
     *   }
     * })
     * 
     */
    delete<T extends AIAnalysisDeleteArgs>(args: SelectSubset<T, AIAnalysisDeleteArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIAnalysis.
     * @param {AIAnalysisUpdateArgs} args - Arguments to update one AIAnalysis.
     * @example
     * // Update one AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIAnalysisUpdateArgs>(args: SelectSubset<T, AIAnalysisUpdateArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIAnalyses.
     * @param {AIAnalysisDeleteManyArgs} args - Arguments to filter AIAnalyses to delete.
     * @example
     * // Delete a few AIAnalyses
     * const { count } = await prisma.aIAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIAnalysisDeleteManyArgs>(args?: SelectSubset<T, AIAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIAnalyses
     * const aIAnalysis = await prisma.aIAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIAnalysisUpdateManyArgs>(args: SelectSubset<T, AIAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIAnalyses and returns the data updated in the database.
     * @param {AIAnalysisUpdateManyAndReturnArgs} args - Arguments to update many AIAnalyses.
     * @example
     * // Update many AIAnalyses
     * const aIAnalysis = await prisma.aIAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIAnalyses and only return the `id`
     * const aIAnalysisWithIdOnly = await prisma.aIAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, AIAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIAnalysis.
     * @param {AIAnalysisUpsertArgs} args - Arguments to update or create a AIAnalysis.
     * @example
     * // Update or create a AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.upsert({
     *   create: {
     *     // ... data to create a AIAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends AIAnalysisUpsertArgs>(args: SelectSubset<T, AIAnalysisUpsertArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisCountArgs} args - Arguments to filter AIAnalyses to count.
     * @example
     * // Count the number of AIAnalyses
     * const count = await prisma.aIAnalysis.count({
     *   where: {
     *     // ... the filter for the AIAnalyses we want to count
     *   }
     * })
    **/
    count<T extends AIAnalysisCountArgs>(
      args?: Subset<T, AIAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIAnalysisAggregateArgs>(args: Subset<T, AIAnalysisAggregateArgs>): Prisma.PrismaPromise<GetAIAnalysisAggregateType<T>>

    /**
     * Group by AIAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisGroupByArgs} args - Group by arguments.
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
      T extends AIAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: AIAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIAnalysis model
   */
  readonly fields: AIAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportDefaultArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AIAnalysis model
   */
  interface AIAnalysisFieldRefs {
    readonly id: FieldRef<"AIAnalysis", 'String'>
    readonly reportId: FieldRef<"AIAnalysis", 'String'>
    readonly findings: FieldRef<"AIAnalysis", 'String'>
    readonly confidence: FieldRef<"AIAnalysis", 'Float'>
    readonly createdAt: FieldRef<"AIAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIAnalysis findUnique
   */
  export type AIAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AIAnalysis to fetch.
     */
    where: AIAnalysisWhereUniqueInput
  }

  /**
   * AIAnalysis findUniqueOrThrow
   */
  export type AIAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AIAnalysis to fetch.
     */
    where: AIAnalysisWhereUniqueInput
  }

  /**
   * AIAnalysis findFirst
   */
  export type AIAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AIAnalysis to fetch.
     */
    where?: AIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIAnalyses to fetch.
     */
    orderBy?: AIAnalysisOrderByWithRelationInput | AIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIAnalyses.
     */
    cursor?: AIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIAnalyses.
     */
    distinct?: AIAnalysisScalarFieldEnum | AIAnalysisScalarFieldEnum[]
  }

  /**
   * AIAnalysis findFirstOrThrow
   */
  export type AIAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AIAnalysis to fetch.
     */
    where?: AIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIAnalyses to fetch.
     */
    orderBy?: AIAnalysisOrderByWithRelationInput | AIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIAnalyses.
     */
    cursor?: AIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIAnalyses.
     */
    distinct?: AIAnalysisScalarFieldEnum | AIAnalysisScalarFieldEnum[]
  }

  /**
   * AIAnalysis findMany
   */
  export type AIAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AIAnalyses to fetch.
     */
    where?: AIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIAnalyses to fetch.
     */
    orderBy?: AIAnalysisOrderByWithRelationInput | AIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIAnalyses.
     */
    cursor?: AIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIAnalyses.
     */
    skip?: number
    distinct?: AIAnalysisScalarFieldEnum | AIAnalysisScalarFieldEnum[]
  }

  /**
   * AIAnalysis create
   */
  export type AIAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a AIAnalysis.
     */
    data: XOR<AIAnalysisCreateInput, AIAnalysisUncheckedCreateInput>
  }

  /**
   * AIAnalysis createMany
   */
  export type AIAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIAnalyses.
     */
    data: AIAnalysisCreateManyInput | AIAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIAnalysis createManyAndReturn
   */
  export type AIAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many AIAnalyses.
     */
    data: AIAnalysisCreateManyInput | AIAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIAnalysis update
   */
  export type AIAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a AIAnalysis.
     */
    data: XOR<AIAnalysisUpdateInput, AIAnalysisUncheckedUpdateInput>
    /**
     * Choose, which AIAnalysis to update.
     */
    where: AIAnalysisWhereUniqueInput
  }

  /**
   * AIAnalysis updateMany
   */
  export type AIAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIAnalyses.
     */
    data: XOR<AIAnalysisUpdateManyMutationInput, AIAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which AIAnalyses to update
     */
    where?: AIAnalysisWhereInput
    /**
     * Limit how many AIAnalyses to update.
     */
    limit?: number
  }

  /**
   * AIAnalysis updateManyAndReturn
   */
  export type AIAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update AIAnalyses.
     */
    data: XOR<AIAnalysisUpdateManyMutationInput, AIAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which AIAnalyses to update
     */
    where?: AIAnalysisWhereInput
    /**
     * Limit how many AIAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIAnalysis upsert
   */
  export type AIAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the AIAnalysis to update in case it exists.
     */
    where: AIAnalysisWhereUniqueInput
    /**
     * In case the AIAnalysis found by the `where` argument doesn't exist, create a new AIAnalysis with this data.
     */
    create: XOR<AIAnalysisCreateInput, AIAnalysisUncheckedCreateInput>
    /**
     * In case the AIAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIAnalysisUpdateInput, AIAnalysisUncheckedUpdateInput>
  }

  /**
   * AIAnalysis delete
   */
  export type AIAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter which AIAnalysis to delete.
     */
    where: AIAnalysisWhereUniqueInput
  }

  /**
   * AIAnalysis deleteMany
   */
  export type AIAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIAnalyses to delete
     */
    where?: AIAnalysisWhereInput
    /**
     * Limit how many AIAnalyses to delete.
     */
    limit?: number
  }

  /**
   * AIAnalysis without action
   */
  export type AIAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIAnalysis
     */
    omit?: AIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
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
    authUserId: 'authUserId',
    name: 'name',
    email: 'email',
    disease: 'disease',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    authUserId: 'authUserId',
    name: 'name',
    email: 'email',
    password: 'password',
    proofOfWork: 'proofOfWork',
    trackRecord: 'trackRecord',
    verified: 'verified',
    specializationId: 'specializationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const DoctorSpecializationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    description: 'description'
  };

  export type DoctorSpecializationScalarFieldEnum = (typeof DoctorSpecializationScalarFieldEnum)[keyof typeof DoctorSpecializationScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    reportText: 'reportText',
    date: 'date',
    confirmed: 'confirmed',
    severity: 'severity',
    userId: 'userId',
    doctorId: 'doctorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const DiagnosisScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    title: 'title',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type DiagnosisScalarFieldEnum = (typeof DiagnosisScalarFieldEnum)[keyof typeof DiagnosisScalarFieldEnum]


  export const AIAnalysisScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    findings: 'findings',
    confidence: 'confidence',
    createdAt: 'createdAt'
  };

  export type AIAnalysisScalarFieldEnum = (typeof AIAnalysisScalarFieldEnum)[keyof typeof AIAnalysisScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    authUserId?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    disease?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reports?: ReportListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    disease?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reports?: ReportOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    disease?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reports?: ReportListRelationFilter
  }, "id" | "authUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    disease?: SortOrderInput | SortOrder
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
    authUserId?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    disease?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    authUserId?: UuidFilter<"Doctor"> | string
    name?: StringFilter<"Doctor"> | string
    email?: StringFilter<"Doctor"> | string
    password?: StringNullableFilter<"Doctor"> | string | null
    proofOfWork?: StringNullableFilter<"Doctor"> | string | null
    trackRecord?: StringNullableFilter<"Doctor"> | string | null
    verified?: BoolFilter<"Doctor"> | boolean
    specializationId?: StringNullableFilter<"Doctor"> | string | null
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    specialization?: XOR<DoctorSpecializationNullableScalarRelationFilter, DoctorSpecializationWhereInput> | null
    reports?: ReportListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    proofOfWork?: SortOrderInput | SortOrder
    trackRecord?: SortOrderInput | SortOrder
    verified?: SortOrder
    specializationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    specialization?: DoctorSpecializationOrderByWithRelationInput
    reports?: ReportOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authUserId?: string
    email?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    password?: StringNullableFilter<"Doctor"> | string | null
    proofOfWork?: StringNullableFilter<"Doctor"> | string | null
    trackRecord?: StringNullableFilter<"Doctor"> | string | null
    verified?: BoolFilter<"Doctor"> | boolean
    specializationId?: StringNullableFilter<"Doctor"> | string | null
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    specialization?: XOR<DoctorSpecializationNullableScalarRelationFilter, DoctorSpecializationWhereInput> | null
    reports?: ReportListRelationFilter
  }, "id" | "authUserId" | "email">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    proofOfWork?: SortOrderInput | SortOrder
    trackRecord?: SortOrderInput | SortOrder
    verified?: SortOrder
    specializationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    authUserId?: UuidWithAggregatesFilter<"Doctor"> | string
    name?: StringWithAggregatesFilter<"Doctor"> | string
    email?: StringWithAggregatesFilter<"Doctor"> | string
    password?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    proofOfWork?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    trackRecord?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    verified?: BoolWithAggregatesFilter<"Doctor"> | boolean
    specializationId?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
  }

  export type DoctorSpecializationWhereInput = {
    AND?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    OR?: DoctorSpecializationWhereInput[]
    NOT?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    id?: StringFilter<"DoctorSpecialization"> | string
    type?: StringFilter<"DoctorSpecialization"> | string
    description?: StringNullableFilter<"DoctorSpecialization"> | string | null
    doctors?: DoctorListRelationFilter
  }

  export type DoctorSpecializationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    doctors?: DoctorOrderByRelationAggregateInput
  }

  export type DoctorSpecializationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    OR?: DoctorSpecializationWhereInput[]
    NOT?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    type?: StringFilter<"DoctorSpecialization"> | string
    description?: StringNullableFilter<"DoctorSpecialization"> | string | null
    doctors?: DoctorListRelationFilter
  }, "id">

  export type DoctorSpecializationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: DoctorSpecializationCountOrderByAggregateInput
    _max?: DoctorSpecializationMaxOrderByAggregateInput
    _min?: DoctorSpecializationMinOrderByAggregateInput
  }

  export type DoctorSpecializationScalarWhereWithAggregatesInput = {
    AND?: DoctorSpecializationScalarWhereWithAggregatesInput | DoctorSpecializationScalarWhereWithAggregatesInput[]
    OR?: DoctorSpecializationScalarWhereWithAggregatesInput[]
    NOT?: DoctorSpecializationScalarWhereWithAggregatesInput | DoctorSpecializationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorSpecialization"> | string
    type?: StringWithAggregatesFilter<"DoctorSpecialization"> | string
    description?: StringNullableWithAggregatesFilter<"DoctorSpecialization"> | string | null
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    imageUrl?: StringFilter<"Report"> | string
    reportText?: StringNullableFilter<"Report"> | string | null
    date?: DateTimeFilter<"Report"> | Date | string
    confirmed?: BoolFilter<"Report"> | boolean
    severity?: EnumSeverityNullableFilter<"Report"> | $Enums.Severity | null
    userId?: StringFilter<"Report"> | string
    doctorId?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    aiAnalysis?: XOR<AIAnalysisNullableScalarRelationFilter, AIAnalysisWhereInput> | null
    diagnosis?: DiagnosisListRelationFilter
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    reportText?: SortOrderInput | SortOrder
    date?: SortOrder
    confirmed?: SortOrder
    severity?: SortOrderInput | SortOrder
    userId?: SortOrder
    doctorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiAnalysis?: AIAnalysisOrderByWithRelationInput
    diagnosis?: DiagnosisOrderByRelationAggregateInput
    doctor?: DoctorOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    imageUrl?: StringFilter<"Report"> | string
    reportText?: StringNullableFilter<"Report"> | string | null
    date?: DateTimeFilter<"Report"> | Date | string
    confirmed?: BoolFilter<"Report"> | boolean
    severity?: EnumSeverityNullableFilter<"Report"> | $Enums.Severity | null
    userId?: StringFilter<"Report"> | string
    doctorId?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    aiAnalysis?: XOR<AIAnalysisNullableScalarRelationFilter, AIAnalysisWhereInput> | null
    diagnosis?: DiagnosisListRelationFilter
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    reportText?: SortOrderInput | SortOrder
    date?: SortOrder
    confirmed?: SortOrder
    severity?: SortOrderInput | SortOrder
    userId?: SortOrder
    doctorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    imageUrl?: StringWithAggregatesFilter<"Report"> | string
    reportText?: StringNullableWithAggregatesFilter<"Report"> | string | null
    date?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    confirmed?: BoolWithAggregatesFilter<"Report"> | boolean
    severity?: EnumSeverityNullableWithAggregatesFilter<"Report"> | $Enums.Severity | null
    userId?: StringWithAggregatesFilter<"Report"> | string
    doctorId?: StringNullableWithAggregatesFilter<"Report"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type DiagnosisWhereInput = {
    AND?: DiagnosisWhereInput | DiagnosisWhereInput[]
    OR?: DiagnosisWhereInput[]
    NOT?: DiagnosisWhereInput | DiagnosisWhereInput[]
    id?: StringFilter<"Diagnosis"> | string
    reportId?: StringFilter<"Diagnosis"> | string
    title?: StringFilter<"Diagnosis"> | string
    notes?: StringNullableFilter<"Diagnosis"> | string | null
    createdAt?: DateTimeFilter<"Diagnosis"> | Date | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }

  export type DiagnosisOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    title?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    report?: ReportOrderByWithRelationInput
  }

  export type DiagnosisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiagnosisWhereInput | DiagnosisWhereInput[]
    OR?: DiagnosisWhereInput[]
    NOT?: DiagnosisWhereInput | DiagnosisWhereInput[]
    reportId?: StringFilter<"Diagnosis"> | string
    title?: StringFilter<"Diagnosis"> | string
    notes?: StringNullableFilter<"Diagnosis"> | string | null
    createdAt?: DateTimeFilter<"Diagnosis"> | Date | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }, "id">

  export type DiagnosisOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    title?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DiagnosisCountOrderByAggregateInput
    _max?: DiagnosisMaxOrderByAggregateInput
    _min?: DiagnosisMinOrderByAggregateInput
  }

  export type DiagnosisScalarWhereWithAggregatesInput = {
    AND?: DiagnosisScalarWhereWithAggregatesInput | DiagnosisScalarWhereWithAggregatesInput[]
    OR?: DiagnosisScalarWhereWithAggregatesInput[]
    NOT?: DiagnosisScalarWhereWithAggregatesInput | DiagnosisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Diagnosis"> | string
    reportId?: StringWithAggregatesFilter<"Diagnosis"> | string
    title?: StringWithAggregatesFilter<"Diagnosis"> | string
    notes?: StringNullableWithAggregatesFilter<"Diagnosis"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Diagnosis"> | Date | string
  }

  export type AIAnalysisWhereInput = {
    AND?: AIAnalysisWhereInput | AIAnalysisWhereInput[]
    OR?: AIAnalysisWhereInput[]
    NOT?: AIAnalysisWhereInput | AIAnalysisWhereInput[]
    id?: StringFilter<"AIAnalysis"> | string
    reportId?: StringFilter<"AIAnalysis"> | string
    findings?: StringFilter<"AIAnalysis"> | string
    confidence?: FloatNullableFilter<"AIAnalysis"> | number | null
    createdAt?: DateTimeFilter<"AIAnalysis"> | Date | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }

  export type AIAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    findings?: SortOrder
    confidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    report?: ReportOrderByWithRelationInput
  }

  export type AIAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reportId?: string
    AND?: AIAnalysisWhereInput | AIAnalysisWhereInput[]
    OR?: AIAnalysisWhereInput[]
    NOT?: AIAnalysisWhereInput | AIAnalysisWhereInput[]
    findings?: StringFilter<"AIAnalysis"> | string
    confidence?: FloatNullableFilter<"AIAnalysis"> | number | null
    createdAt?: DateTimeFilter<"AIAnalysis"> | Date | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }, "id" | "reportId">

  export type AIAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    findings?: SortOrder
    confidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AIAnalysisCountOrderByAggregateInput
    _avg?: AIAnalysisAvgOrderByAggregateInput
    _max?: AIAnalysisMaxOrderByAggregateInput
    _min?: AIAnalysisMinOrderByAggregateInput
    _sum?: AIAnalysisSumOrderByAggregateInput
  }

  export type AIAnalysisScalarWhereWithAggregatesInput = {
    AND?: AIAnalysisScalarWhereWithAggregatesInput | AIAnalysisScalarWhereWithAggregatesInput[]
    OR?: AIAnalysisScalarWhereWithAggregatesInput[]
    NOT?: AIAnalysisScalarWhereWithAggregatesInput | AIAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIAnalysis"> | string
    reportId?: StringWithAggregatesFilter<"AIAnalysis"> | string
    findings?: StringWithAggregatesFilter<"AIAnalysis"> | string
    confidence?: FloatNullableWithAggregatesFilter<"AIAnalysis"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AIAnalysis"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    disease?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    disease?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    disease?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    disease?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    disease?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    disease?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    disease?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    password?: string | null
    proofOfWork?: string | null
    trackRecord?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specialization?: DoctorSpecializationCreateNestedOneWithoutDoctorsInput
    reports?: ReportCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    password?: string | null
    proofOfWork?: string | null
    trackRecord?: string | null
    verified?: boolean
    specializationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    proofOfWork?: NullableStringFieldUpdateOperationsInput | string | null
    trackRecord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialization?: DoctorSpecializationUpdateOneWithoutDoctorsNestedInput
    reports?: ReportUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    proofOfWork?: NullableStringFieldUpdateOperationsInput | string | null
    trackRecord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    specializationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    password?: string | null
    proofOfWork?: string | null
    trackRecord?: string | null
    verified?: boolean
    specializationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    proofOfWork?: NullableStringFieldUpdateOperationsInput | string | null
    trackRecord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    proofOfWork?: NullableStringFieldUpdateOperationsInput | string | null
    trackRecord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    specializationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSpecializationCreateInput = {
    id?: string
    type: string
    description?: string | null
    doctors?: DoctorCreateNestedManyWithoutSpecializationInput
  }

  export type DoctorSpecializationUncheckedCreateInput = {
    id?: string
    type: string
    description?: string | null
    doctors?: DoctorUncheckedCreateNestedManyWithoutSpecializationInput
  }

  export type DoctorSpecializationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    doctors?: DoctorUpdateManyWithoutSpecializationNestedInput
  }

  export type DoctorSpecializationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    doctors?: DoctorUncheckedUpdateManyWithoutSpecializationNestedInput
  }

  export type DoctorSpecializationCreateManyInput = {
    id?: string
    type: string
    description?: string | null
  }

  export type DoctorSpecializationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorSpecializationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportCreateInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiAnalysis?: AIAnalysisCreateNestedOneWithoutReportInput
    diagnosis?: DiagnosisCreateNestedManyWithoutReportInput
    doctor?: DoctorCreateNestedOneWithoutReportsInput
    user: UserCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    userId: string
    doctorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiAnalysis?: AIAnalysisUncheckedCreateNestedOneWithoutReportInput
    diagnosis?: DiagnosisUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiAnalysis?: AIAnalysisUpdateOneWithoutReportNestedInput
    diagnosis?: DiagnosisUpdateManyWithoutReportNestedInput
    doctor?: DoctorUpdateOneWithoutReportsNestedInput
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    userId?: StringFieldUpdateOperationsInput | string
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiAnalysis?: AIAnalysisUncheckedUpdateOneWithoutReportNestedInput
    diagnosis?: DiagnosisUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateManyInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    userId: string
    doctorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    userId?: StringFieldUpdateOperationsInput | string
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisCreateInput = {
    id?: string
    title: string
    notes?: string | null
    createdAt?: Date | string
    report: ReportCreateNestedOneWithoutDiagnosisInput
  }

  export type DiagnosisUncheckedCreateInput = {
    id?: string
    reportId: string
    title: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type DiagnosisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneRequiredWithoutDiagnosisNestedInput
  }

  export type DiagnosisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisCreateManyInput = {
    id?: string
    reportId: string
    title: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type DiagnosisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIAnalysisCreateInput = {
    id?: string
    findings: string
    confidence?: number | null
    createdAt?: Date | string
    report: ReportCreateNestedOneWithoutAiAnalysisInput
  }

  export type AIAnalysisUncheckedCreateInput = {
    id?: string
    reportId: string
    findings: string
    confidence?: number | null
    createdAt?: Date | string
  }

  export type AIAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    findings?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneRequiredWithoutAiAnalysisNestedInput
  }

  export type AIAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    findings?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIAnalysisCreateManyInput = {
    id?: string
    reportId: string
    findings: string
    confidence?: number | null
    createdAt?: Date | string
  }

  export type AIAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    findings?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    findings?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    disease?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    disease?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    disease?: SortOrder
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

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DoctorSpecializationNullableScalarRelationFilter = {
    is?: DoctorSpecializationWhereInput | null
    isNot?: DoctorSpecializationWhereInput | null
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    proofOfWork?: SortOrder
    trackRecord?: SortOrder
    verified?: SortOrder
    specializationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    proofOfWork?: SortOrder
    trackRecord?: SortOrder
    verified?: SortOrder
    specializationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    proofOfWork?: SortOrder
    trackRecord?: SortOrder
    verified?: SortOrder
    specializationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DoctorListRelationFilter = {
    every?: DoctorWhereInput
    some?: DoctorWhereInput
    none?: DoctorWhereInput
  }

  export type DoctorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorSpecializationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type DoctorSpecializationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type DoctorSpecializationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type EnumSeverityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeverityNullableFilter<$PrismaModel> | $Enums.Severity | null
  }

  export type AIAnalysisNullableScalarRelationFilter = {
    is?: AIAnalysisWhereInput | null
    isNot?: AIAnalysisWhereInput | null
  }

  export type DiagnosisListRelationFilter = {
    every?: DiagnosisWhereInput
    some?: DiagnosisWhereInput
    none?: DiagnosisWhereInput
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DiagnosisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    reportText?: SortOrder
    date?: SortOrder
    confirmed?: SortOrder
    severity?: SortOrder
    userId?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    reportText?: SortOrder
    date?: SortOrder
    confirmed?: SortOrder
    severity?: SortOrder
    userId?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    reportText?: SortOrder
    date?: SortOrder
    confirmed?: SortOrder
    severity?: SortOrder
    userId?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSeverityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeverityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Severity | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSeverityNullableFilter<$PrismaModel>
    _max?: NestedEnumSeverityNullableFilter<$PrismaModel>
  }

  export type ReportScalarRelationFilter = {
    is?: ReportWhereInput
    isNot?: ReportWhereInput
  }

  export type DiagnosisCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type DiagnosisMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type DiagnosisMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AIAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    findings?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type AIAnalysisAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type AIAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    findings?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type AIAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    findings?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type AIAnalysisSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
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

  export type ReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DoctorSpecializationCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorsInput, DoctorSpecializationUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorsInput
    connect?: DoctorSpecializationWhereUniqueInput
  }

  export type ReportCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ReportCreateWithoutDoctorInput, ReportUncheckedCreateWithoutDoctorInput> | ReportCreateWithoutDoctorInput[] | ReportUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDoctorInput | ReportCreateOrConnectWithoutDoctorInput[]
    createMany?: ReportCreateManyDoctorInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ReportCreateWithoutDoctorInput, ReportUncheckedCreateWithoutDoctorInput> | ReportCreateWithoutDoctorInput[] | ReportUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDoctorInput | ReportCreateOrConnectWithoutDoctorInput[]
    createMany?: ReportCreateManyDoctorInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DoctorSpecializationUpdateOneWithoutDoctorsNestedInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorsInput, DoctorSpecializationUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorsInput
    upsert?: DoctorSpecializationUpsertWithoutDoctorsInput
    disconnect?: DoctorSpecializationWhereInput | boolean
    delete?: DoctorSpecializationWhereInput | boolean
    connect?: DoctorSpecializationWhereUniqueInput
    update?: XOR<XOR<DoctorSpecializationUpdateToOneWithWhereWithoutDoctorsInput, DoctorSpecializationUpdateWithoutDoctorsInput>, DoctorSpecializationUncheckedUpdateWithoutDoctorsInput>
  }

  export type ReportUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ReportCreateWithoutDoctorInput, ReportUncheckedCreateWithoutDoctorInput> | ReportCreateWithoutDoctorInput[] | ReportUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDoctorInput | ReportCreateOrConnectWithoutDoctorInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutDoctorInput | ReportUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ReportCreateManyDoctorInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutDoctorInput | ReportUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutDoctorInput | ReportUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ReportCreateWithoutDoctorInput, ReportUncheckedCreateWithoutDoctorInput> | ReportCreateWithoutDoctorInput[] | ReportUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDoctorInput | ReportCreateOrConnectWithoutDoctorInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutDoctorInput | ReportUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ReportCreateManyDoctorInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutDoctorInput | ReportUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutDoctorInput | ReportUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DoctorCreateNestedManyWithoutSpecializationInput = {
    create?: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput> | DoctorCreateWithoutSpecializationInput[] | DoctorUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutSpecializationInput | DoctorCreateOrConnectWithoutSpecializationInput[]
    createMany?: DoctorCreateManySpecializationInputEnvelope
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
  }

  export type DoctorUncheckedCreateNestedManyWithoutSpecializationInput = {
    create?: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput> | DoctorCreateWithoutSpecializationInput[] | DoctorUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutSpecializationInput | DoctorCreateOrConnectWithoutSpecializationInput[]
    createMany?: DoctorCreateManySpecializationInputEnvelope
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
  }

  export type DoctorUpdateManyWithoutSpecializationNestedInput = {
    create?: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput> | DoctorCreateWithoutSpecializationInput[] | DoctorUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutSpecializationInput | DoctorCreateOrConnectWithoutSpecializationInput[]
    upsert?: DoctorUpsertWithWhereUniqueWithoutSpecializationInput | DoctorUpsertWithWhereUniqueWithoutSpecializationInput[]
    createMany?: DoctorCreateManySpecializationInputEnvelope
    set?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    disconnect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    delete?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    update?: DoctorUpdateWithWhereUniqueWithoutSpecializationInput | DoctorUpdateWithWhereUniqueWithoutSpecializationInput[]
    updateMany?: DoctorUpdateManyWithWhereWithoutSpecializationInput | DoctorUpdateManyWithWhereWithoutSpecializationInput[]
    deleteMany?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
  }

  export type DoctorUncheckedUpdateManyWithoutSpecializationNestedInput = {
    create?: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput> | DoctorCreateWithoutSpecializationInput[] | DoctorUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutSpecializationInput | DoctorCreateOrConnectWithoutSpecializationInput[]
    upsert?: DoctorUpsertWithWhereUniqueWithoutSpecializationInput | DoctorUpsertWithWhereUniqueWithoutSpecializationInput[]
    createMany?: DoctorCreateManySpecializationInputEnvelope
    set?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    disconnect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    delete?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    update?: DoctorUpdateWithWhereUniqueWithoutSpecializationInput | DoctorUpdateWithWhereUniqueWithoutSpecializationInput[]
    updateMany?: DoctorUpdateManyWithWhereWithoutSpecializationInput | DoctorUpdateManyWithWhereWithoutSpecializationInput[]
    deleteMany?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
  }

  export type AIAnalysisCreateNestedOneWithoutReportInput = {
    create?: XOR<AIAnalysisCreateWithoutReportInput, AIAnalysisUncheckedCreateWithoutReportInput>
    connectOrCreate?: AIAnalysisCreateOrConnectWithoutReportInput
    connect?: AIAnalysisWhereUniqueInput
  }

  export type DiagnosisCreateNestedManyWithoutReportInput = {
    create?: XOR<DiagnosisCreateWithoutReportInput, DiagnosisUncheckedCreateWithoutReportInput> | DiagnosisCreateWithoutReportInput[] | DiagnosisUncheckedCreateWithoutReportInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutReportInput | DiagnosisCreateOrConnectWithoutReportInput[]
    createMany?: DiagnosisCreateManyReportInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type DoctorCreateNestedOneWithoutReportsInput = {
    create?: XOR<DoctorCreateWithoutReportsInput, DoctorUncheckedCreateWithoutReportsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutReportsInput
    connect?: DoctorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReportsInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    connect?: UserWhereUniqueInput
  }

  export type AIAnalysisUncheckedCreateNestedOneWithoutReportInput = {
    create?: XOR<AIAnalysisCreateWithoutReportInput, AIAnalysisUncheckedCreateWithoutReportInput>
    connectOrCreate?: AIAnalysisCreateOrConnectWithoutReportInput
    connect?: AIAnalysisWhereUniqueInput
  }

  export type DiagnosisUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<DiagnosisCreateWithoutReportInput, DiagnosisUncheckedCreateWithoutReportInput> | DiagnosisCreateWithoutReportInput[] | DiagnosisUncheckedCreateWithoutReportInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutReportInput | DiagnosisCreateOrConnectWithoutReportInput[]
    createMany?: DiagnosisCreateManyReportInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type NullableEnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity | null
  }

  export type AIAnalysisUpdateOneWithoutReportNestedInput = {
    create?: XOR<AIAnalysisCreateWithoutReportInput, AIAnalysisUncheckedCreateWithoutReportInput>
    connectOrCreate?: AIAnalysisCreateOrConnectWithoutReportInput
    upsert?: AIAnalysisUpsertWithoutReportInput
    disconnect?: AIAnalysisWhereInput | boolean
    delete?: AIAnalysisWhereInput | boolean
    connect?: AIAnalysisWhereUniqueInput
    update?: XOR<XOR<AIAnalysisUpdateToOneWithWhereWithoutReportInput, AIAnalysisUpdateWithoutReportInput>, AIAnalysisUncheckedUpdateWithoutReportInput>
  }

  export type DiagnosisUpdateManyWithoutReportNestedInput = {
    create?: XOR<DiagnosisCreateWithoutReportInput, DiagnosisUncheckedCreateWithoutReportInput> | DiagnosisCreateWithoutReportInput[] | DiagnosisUncheckedCreateWithoutReportInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutReportInput | DiagnosisCreateOrConnectWithoutReportInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutReportInput | DiagnosisUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: DiagnosisCreateManyReportInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutReportInput | DiagnosisUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutReportInput | DiagnosisUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type DoctorUpdateOneWithoutReportsNestedInput = {
    create?: XOR<DoctorCreateWithoutReportsInput, DoctorUncheckedCreateWithoutReportsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutReportsInput
    upsert?: DoctorUpsertWithoutReportsInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutReportsInput, DoctorUpdateWithoutReportsInput>, DoctorUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    upsert?: UserUpsertWithoutReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsInput, UserUpdateWithoutReportsInput>, UserUncheckedUpdateWithoutReportsInput>
  }

  export type AIAnalysisUncheckedUpdateOneWithoutReportNestedInput = {
    create?: XOR<AIAnalysisCreateWithoutReportInput, AIAnalysisUncheckedCreateWithoutReportInput>
    connectOrCreate?: AIAnalysisCreateOrConnectWithoutReportInput
    upsert?: AIAnalysisUpsertWithoutReportInput
    disconnect?: AIAnalysisWhereInput | boolean
    delete?: AIAnalysisWhereInput | boolean
    connect?: AIAnalysisWhereUniqueInput
    update?: XOR<XOR<AIAnalysisUpdateToOneWithWhereWithoutReportInput, AIAnalysisUpdateWithoutReportInput>, AIAnalysisUncheckedUpdateWithoutReportInput>
  }

  export type DiagnosisUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<DiagnosisCreateWithoutReportInput, DiagnosisUncheckedCreateWithoutReportInput> | DiagnosisCreateWithoutReportInput[] | DiagnosisUncheckedCreateWithoutReportInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutReportInput | DiagnosisCreateOrConnectWithoutReportInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutReportInput | DiagnosisUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: DiagnosisCreateManyReportInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutReportInput | DiagnosisUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutReportInput | DiagnosisUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type ReportCreateNestedOneWithoutDiagnosisInput = {
    create?: XOR<ReportCreateWithoutDiagnosisInput, ReportUncheckedCreateWithoutDiagnosisInput>
    connectOrCreate?: ReportCreateOrConnectWithoutDiagnosisInput
    connect?: ReportWhereUniqueInput
  }

  export type ReportUpdateOneRequiredWithoutDiagnosisNestedInput = {
    create?: XOR<ReportCreateWithoutDiagnosisInput, ReportUncheckedCreateWithoutDiagnosisInput>
    connectOrCreate?: ReportCreateOrConnectWithoutDiagnosisInput
    upsert?: ReportUpsertWithoutDiagnosisInput
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutDiagnosisInput, ReportUpdateWithoutDiagnosisInput>, ReportUncheckedUpdateWithoutDiagnosisInput>
  }

  export type ReportCreateNestedOneWithoutAiAnalysisInput = {
    create?: XOR<ReportCreateWithoutAiAnalysisInput, ReportUncheckedCreateWithoutAiAnalysisInput>
    connectOrCreate?: ReportCreateOrConnectWithoutAiAnalysisInput
    connect?: ReportWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReportUpdateOneRequiredWithoutAiAnalysisNestedInput = {
    create?: XOR<ReportCreateWithoutAiAnalysisInput, ReportUncheckedCreateWithoutAiAnalysisInput>
    connectOrCreate?: ReportCreateOrConnectWithoutAiAnalysisInput
    upsert?: ReportUpsertWithoutAiAnalysisInput
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutAiAnalysisInput, ReportUpdateWithoutAiAnalysisInput>, ReportUncheckedUpdateWithoutAiAnalysisInput>
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSeverityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeverityNullableFilter<$PrismaModel> | $Enums.Severity | null
  }

  export type NestedEnumSeverityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeverityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Severity | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSeverityNullableFilter<$PrismaModel>
    _max?: NestedEnumSeverityNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ReportCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiAnalysis?: AIAnalysisCreateNestedOneWithoutReportInput
    diagnosis?: DiagnosisCreateNestedManyWithoutReportInput
    doctor?: DoctorCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    doctorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiAnalysis?: AIAnalysisUncheckedCreateNestedOneWithoutReportInput
    diagnosis?: DiagnosisUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateManyUserInputEnvelope = {
    data: ReportCreateManyUserInput | ReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    imageUrl?: StringFilter<"Report"> | string
    reportText?: StringNullableFilter<"Report"> | string | null
    date?: DateTimeFilter<"Report"> | Date | string
    confirmed?: BoolFilter<"Report"> | boolean
    severity?: EnumSeverityNullableFilter<"Report"> | $Enums.Severity | null
    userId?: StringFilter<"Report"> | string
    doctorId?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type DoctorSpecializationCreateWithoutDoctorsInput = {
    id?: string
    type: string
    description?: string | null
  }

  export type DoctorSpecializationUncheckedCreateWithoutDoctorsInput = {
    id?: string
    type: string
    description?: string | null
  }

  export type DoctorSpecializationCreateOrConnectWithoutDoctorsInput = {
    where: DoctorSpecializationWhereUniqueInput
    create: XOR<DoctorSpecializationCreateWithoutDoctorsInput, DoctorSpecializationUncheckedCreateWithoutDoctorsInput>
  }

  export type ReportCreateWithoutDoctorInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiAnalysis?: AIAnalysisCreateNestedOneWithoutReportInput
    diagnosis?: DiagnosisCreateNestedManyWithoutReportInput
    user: UserCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutDoctorInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiAnalysis?: AIAnalysisUncheckedCreateNestedOneWithoutReportInput
    diagnosis?: DiagnosisUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutDoctorInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutDoctorInput, ReportUncheckedCreateWithoutDoctorInput>
  }

  export type ReportCreateManyDoctorInputEnvelope = {
    data: ReportCreateManyDoctorInput | ReportCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorSpecializationUpsertWithoutDoctorsInput = {
    update: XOR<DoctorSpecializationUpdateWithoutDoctorsInput, DoctorSpecializationUncheckedUpdateWithoutDoctorsInput>
    create: XOR<DoctorSpecializationCreateWithoutDoctorsInput, DoctorSpecializationUncheckedCreateWithoutDoctorsInput>
    where?: DoctorSpecializationWhereInput
  }

  export type DoctorSpecializationUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: DoctorSpecializationWhereInput
    data: XOR<DoctorSpecializationUpdateWithoutDoctorsInput, DoctorSpecializationUncheckedUpdateWithoutDoctorsInput>
  }

  export type DoctorSpecializationUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorSpecializationUncheckedUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUpsertWithWhereUniqueWithoutDoctorInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutDoctorInput, ReportUncheckedUpdateWithoutDoctorInput>
    create: XOR<ReportCreateWithoutDoctorInput, ReportUncheckedCreateWithoutDoctorInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutDoctorInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutDoctorInput, ReportUncheckedUpdateWithoutDoctorInput>
  }

  export type ReportUpdateManyWithWhereWithoutDoctorInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorCreateWithoutSpecializationInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    password?: string | null
    proofOfWork?: string | null
    trackRecord?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutSpecializationInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    password?: string | null
    proofOfWork?: string | null
    trackRecord?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutSpecializationInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput>
  }

  export type DoctorCreateManySpecializationInputEnvelope = {
    data: DoctorCreateManySpecializationInput | DoctorCreateManySpecializationInput[]
    skipDuplicates?: boolean
  }

  export type DoctorUpsertWithWhereUniqueWithoutSpecializationInput = {
    where: DoctorWhereUniqueInput
    update: XOR<DoctorUpdateWithoutSpecializationInput, DoctorUncheckedUpdateWithoutSpecializationInput>
    create: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput>
  }

  export type DoctorUpdateWithWhereUniqueWithoutSpecializationInput = {
    where: DoctorWhereUniqueInput
    data: XOR<DoctorUpdateWithoutSpecializationInput, DoctorUncheckedUpdateWithoutSpecializationInput>
  }

  export type DoctorUpdateManyWithWhereWithoutSpecializationInput = {
    where: DoctorScalarWhereInput
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyWithoutSpecializationInput>
  }

  export type DoctorScalarWhereInput = {
    AND?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
    OR?: DoctorScalarWhereInput[]
    NOT?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
    id?: StringFilter<"Doctor"> | string
    authUserId?: UuidFilter<"Doctor"> | string
    name?: StringFilter<"Doctor"> | string
    email?: StringFilter<"Doctor"> | string
    password?: StringNullableFilter<"Doctor"> | string | null
    proofOfWork?: StringNullableFilter<"Doctor"> | string | null
    trackRecord?: StringNullableFilter<"Doctor"> | string | null
    verified?: BoolFilter<"Doctor"> | boolean
    specializationId?: StringNullableFilter<"Doctor"> | string | null
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
  }

  export type AIAnalysisCreateWithoutReportInput = {
    id?: string
    findings: string
    confidence?: number | null
    createdAt?: Date | string
  }

  export type AIAnalysisUncheckedCreateWithoutReportInput = {
    id?: string
    findings: string
    confidence?: number | null
    createdAt?: Date | string
  }

  export type AIAnalysisCreateOrConnectWithoutReportInput = {
    where: AIAnalysisWhereUniqueInput
    create: XOR<AIAnalysisCreateWithoutReportInput, AIAnalysisUncheckedCreateWithoutReportInput>
  }

  export type DiagnosisCreateWithoutReportInput = {
    id?: string
    title: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type DiagnosisUncheckedCreateWithoutReportInput = {
    id?: string
    title: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type DiagnosisCreateOrConnectWithoutReportInput = {
    where: DiagnosisWhereUniqueInput
    create: XOR<DiagnosisCreateWithoutReportInput, DiagnosisUncheckedCreateWithoutReportInput>
  }

  export type DiagnosisCreateManyReportInputEnvelope = {
    data: DiagnosisCreateManyReportInput | DiagnosisCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type DoctorCreateWithoutReportsInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    password?: string | null
    proofOfWork?: string | null
    trackRecord?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specialization?: DoctorSpecializationCreateNestedOneWithoutDoctorsInput
  }

  export type DoctorUncheckedCreateWithoutReportsInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    password?: string | null
    proofOfWork?: string | null
    trackRecord?: string | null
    verified?: boolean
    specializationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorCreateOrConnectWithoutReportsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutReportsInput, DoctorUncheckedCreateWithoutReportsInput>
  }

  export type UserCreateWithoutReportsInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    disease?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutReportsInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    disease?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
  }

  export type AIAnalysisUpsertWithoutReportInput = {
    update: XOR<AIAnalysisUpdateWithoutReportInput, AIAnalysisUncheckedUpdateWithoutReportInput>
    create: XOR<AIAnalysisCreateWithoutReportInput, AIAnalysisUncheckedCreateWithoutReportInput>
    where?: AIAnalysisWhereInput
  }

  export type AIAnalysisUpdateToOneWithWhereWithoutReportInput = {
    where?: AIAnalysisWhereInput
    data: XOR<AIAnalysisUpdateWithoutReportInput, AIAnalysisUncheckedUpdateWithoutReportInput>
  }

  export type AIAnalysisUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    findings?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIAnalysisUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    findings?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisUpsertWithWhereUniqueWithoutReportInput = {
    where: DiagnosisWhereUniqueInput
    update: XOR<DiagnosisUpdateWithoutReportInput, DiagnosisUncheckedUpdateWithoutReportInput>
    create: XOR<DiagnosisCreateWithoutReportInput, DiagnosisUncheckedCreateWithoutReportInput>
  }

  export type DiagnosisUpdateWithWhereUniqueWithoutReportInput = {
    where: DiagnosisWhereUniqueInput
    data: XOR<DiagnosisUpdateWithoutReportInput, DiagnosisUncheckedUpdateWithoutReportInput>
  }

  export type DiagnosisUpdateManyWithWhereWithoutReportInput = {
    where: DiagnosisScalarWhereInput
    data: XOR<DiagnosisUpdateManyMutationInput, DiagnosisUncheckedUpdateManyWithoutReportInput>
  }

  export type DiagnosisScalarWhereInput = {
    AND?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
    OR?: DiagnosisScalarWhereInput[]
    NOT?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
    id?: StringFilter<"Diagnosis"> | string
    reportId?: StringFilter<"Diagnosis"> | string
    title?: StringFilter<"Diagnosis"> | string
    notes?: StringNullableFilter<"Diagnosis"> | string | null
    createdAt?: DateTimeFilter<"Diagnosis"> | Date | string
  }

  export type DoctorUpsertWithoutReportsInput = {
    update: XOR<DoctorUpdateWithoutReportsInput, DoctorUncheckedUpdateWithoutReportsInput>
    create: XOR<DoctorCreateWithoutReportsInput, DoctorUncheckedCreateWithoutReportsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutReportsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutReportsInput, DoctorUncheckedUpdateWithoutReportsInput>
  }

  export type DoctorUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    proofOfWork?: NullableStringFieldUpdateOperationsInput | string | null
    trackRecord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialization?: DoctorSpecializationUpdateOneWithoutDoctorsNestedInput
  }

  export type DoctorUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    proofOfWork?: NullableStringFieldUpdateOperationsInput | string | null
    trackRecord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    specializationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutReportsInput = {
    update: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    disease?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    disease?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateWithoutDiagnosisInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiAnalysis?: AIAnalysisCreateNestedOneWithoutReportInput
    doctor?: DoctorCreateNestedOneWithoutReportsInput
    user: UserCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutDiagnosisInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    userId: string
    doctorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiAnalysis?: AIAnalysisUncheckedCreateNestedOneWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutDiagnosisInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutDiagnosisInput, ReportUncheckedCreateWithoutDiagnosisInput>
  }

  export type ReportUpsertWithoutDiagnosisInput = {
    update: XOR<ReportUpdateWithoutDiagnosisInput, ReportUncheckedUpdateWithoutDiagnosisInput>
    create: XOR<ReportCreateWithoutDiagnosisInput, ReportUncheckedCreateWithoutDiagnosisInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutDiagnosisInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutDiagnosisInput, ReportUncheckedUpdateWithoutDiagnosisInput>
  }

  export type ReportUpdateWithoutDiagnosisInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiAnalysis?: AIAnalysisUpdateOneWithoutReportNestedInput
    doctor?: DoctorUpdateOneWithoutReportsNestedInput
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutDiagnosisInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    userId?: StringFieldUpdateOperationsInput | string
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiAnalysis?: AIAnalysisUncheckedUpdateOneWithoutReportNestedInput
  }

  export type ReportCreateWithoutAiAnalysisInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    createdAt?: Date | string
    updatedAt?: Date | string
    diagnosis?: DiagnosisCreateNestedManyWithoutReportInput
    doctor?: DoctorCreateNestedOneWithoutReportsInput
    user: UserCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutAiAnalysisInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    userId: string
    doctorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    diagnosis?: DiagnosisUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutAiAnalysisInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutAiAnalysisInput, ReportUncheckedCreateWithoutAiAnalysisInput>
  }

  export type ReportUpsertWithoutAiAnalysisInput = {
    update: XOR<ReportUpdateWithoutAiAnalysisInput, ReportUncheckedUpdateWithoutAiAnalysisInput>
    create: XOR<ReportCreateWithoutAiAnalysisInput, ReportUncheckedCreateWithoutAiAnalysisInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutAiAnalysisInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutAiAnalysisInput, ReportUncheckedUpdateWithoutAiAnalysisInput>
  }

  export type ReportUpdateWithoutAiAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosis?: DiagnosisUpdateManyWithoutReportNestedInput
    doctor?: DoctorUpdateOneWithoutReportsNestedInput
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutAiAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    userId?: StringFieldUpdateOperationsInput | string
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosis?: DiagnosisUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateManyUserInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    doctorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiAnalysis?: AIAnalysisUpdateOneWithoutReportNestedInput
    diagnosis?: DiagnosisUpdateManyWithoutReportNestedInput
    doctor?: DoctorUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiAnalysis?: AIAnalysisUncheckedUpdateOneWithoutReportNestedInput
    diagnosis?: DiagnosisUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyDoctorInput = {
    id?: string
    imageUrl: string
    reportText?: string | null
    date?: Date | string
    confirmed?: boolean
    severity?: $Enums.Severity | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiAnalysis?: AIAnalysisUpdateOneWithoutReportNestedInput
    diagnosis?: DiagnosisUpdateManyWithoutReportNestedInput
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiAnalysis?: AIAnalysisUncheckedUpdateOneWithoutReportNestedInput
    diagnosis?: DiagnosisUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    reportText?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateManySpecializationInput = {
    id?: string
    authUserId: string
    name: string
    email: string
    password?: string | null
    proofOfWork?: string | null
    trackRecord?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateWithoutSpecializationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    proofOfWork?: NullableStringFieldUpdateOperationsInput | string | null
    trackRecord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutSpecializationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    proofOfWork?: NullableStringFieldUpdateOperationsInput | string | null
    trackRecord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateManyWithoutSpecializationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    proofOfWork?: NullableStringFieldUpdateOperationsInput | string | null
    trackRecord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisCreateManyReportInput = {
    id?: string
    title: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type DiagnosisUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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