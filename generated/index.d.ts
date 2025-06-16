
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Scheduling
 * 
 */
export type Scheduling = $Result.DefaultSelection<Prisma.$SchedulingPayload>
/**
 * Model Worker
 * 
 */
export type Worker = $Result.DefaultSelection<Prisma.$WorkerPayload>
/**
 * Model WorkersOnSchedulings
 * 
 */
export type WorkersOnSchedulings = $Result.DefaultSelection<Prisma.$WorkersOnSchedulingsPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model ProductsOnPurchase
 * 
 */
export type ProductsOnPurchase = $Result.DefaultSelection<Prisma.$ProductsOnPurchasePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  MANAGER: 'MANAGER',
  VETERINARIAN: 'VETERINARIAN',
  CASHIER: 'CASHIER',
  SERVICEPROVIDER: 'SERVICEPROVIDER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduling`: Exposes CRUD operations for the **Scheduling** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedulings
    * const schedulings = await prisma.scheduling.findMany()
    * ```
    */
  get scheduling(): Prisma.SchedulingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worker`: Exposes CRUD operations for the **Worker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workers
    * const workers = await prisma.worker.findMany()
    * ```
    */
  get worker(): Prisma.WorkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workersOnSchedulings`: Exposes CRUD operations for the **WorkersOnSchedulings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkersOnSchedulings
    * const workersOnSchedulings = await prisma.workersOnSchedulings.findMany()
    * ```
    */
  get workersOnSchedulings(): Prisma.WorkersOnSchedulingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productsOnPurchase`: Exposes CRUD operations for the **ProductsOnPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsOnPurchases
    * const productsOnPurchases = await prisma.productsOnPurchase.findMany()
    * ```
    */
  get productsOnPurchase(): Prisma.ProductsOnPurchaseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Customer: 'Customer',
    Pet: 'Pet',
    Service: 'Service',
    Scheduling: 'Scheduling',
    Worker: 'Worker',
    WorkersOnSchedulings: 'WorkersOnSchedulings',
    Product: 'Product',
    Purchase: 'Purchase',
    ProductsOnPurchase: 'ProductsOnPurchase'
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
      modelProps: "customer" | "pet" | "service" | "scheduling" | "worker" | "workersOnSchedulings" | "product" | "purchase" | "productsOnPurchase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Scheduling: {
        payload: Prisma.$SchedulingPayload<ExtArgs>
        fields: Prisma.SchedulingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchedulingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchedulingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          findFirst: {
            args: Prisma.SchedulingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchedulingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          findMany: {
            args: Prisma.SchedulingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          create: {
            args: Prisma.SchedulingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          createMany: {
            args: Prisma.SchedulingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchedulingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          delete: {
            args: Prisma.SchedulingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          update: {
            args: Prisma.SchedulingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          deleteMany: {
            args: Prisma.SchedulingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchedulingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchedulingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          upsert: {
            args: Prisma.SchedulingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          aggregate: {
            args: Prisma.SchedulingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduling>
          }
          groupBy: {
            args: Prisma.SchedulingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchedulingCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulingCountAggregateOutputType> | number
          }
        }
      }
      Worker: {
        payload: Prisma.$WorkerPayload<ExtArgs>
        fields: Prisma.WorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findFirst: {
            args: Prisma.WorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findMany: {
            args: Prisma.WorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          create: {
            args: Prisma.WorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          createMany: {
            args: Prisma.WorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          delete: {
            args: Prisma.WorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          update: {
            args: Prisma.WorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          deleteMany: {
            args: Prisma.WorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          upsert: {
            args: Prisma.WorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          aggregate: {
            args: Prisma.WorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorker>
          }
          groupBy: {
            args: Prisma.WorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerCountAggregateOutputType> | number
          }
        }
      }
      WorkersOnSchedulings: {
        payload: Prisma.$WorkersOnSchedulingsPayload<ExtArgs>
        fields: Prisma.WorkersOnSchedulingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkersOnSchedulingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnSchedulingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkersOnSchedulingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnSchedulingsPayload>
          }
          findFirst: {
            args: Prisma.WorkersOnSchedulingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnSchedulingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkersOnSchedulingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnSchedulingsPayload>
          }
          findMany: {
            args: Prisma.WorkersOnSchedulingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnSchedulingsPayload>[]
          }
          create: {
            args: Prisma.WorkersOnSchedulingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnSchedulingsPayload>
          }
          createMany: {
            args: Prisma.WorkersOnSchedulingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkersOnSchedulingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnSchedulingsPayload>[]
          }
          delete: {
            args: Prisma.WorkersOnSchedulingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnSchedulingsPayload>
          }
          update: {
            args: Prisma.WorkersOnSchedulingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnSchedulingsPayload>
          }
          deleteMany: {
            args: Prisma.WorkersOnSchedulingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkersOnSchedulingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkersOnSchedulingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnSchedulingsPayload>[]
          }
          upsert: {
            args: Prisma.WorkersOnSchedulingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkersOnSchedulingsPayload>
          }
          aggregate: {
            args: Prisma.WorkersOnSchedulingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkersOnSchedulings>
          }
          groupBy: {
            args: Prisma.WorkersOnSchedulingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkersOnSchedulingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkersOnSchedulingsCountArgs<ExtArgs>
            result: $Utils.Optional<WorkersOnSchedulingsCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      ProductsOnPurchase: {
        payload: Prisma.$ProductsOnPurchasePayload<ExtArgs>
        fields: Prisma.ProductsOnPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsOnPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsOnPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnPurchasePayload>
          }
          findFirst: {
            args: Prisma.ProductsOnPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsOnPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnPurchasePayload>
          }
          findMany: {
            args: Prisma.ProductsOnPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnPurchasePayload>[]
          }
          create: {
            args: Prisma.ProductsOnPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnPurchasePayload>
          }
          createMany: {
            args: Prisma.ProductsOnPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsOnPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnPurchasePayload>[]
          }
          delete: {
            args: Prisma.ProductsOnPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnPurchasePayload>
          }
          update: {
            args: Prisma.ProductsOnPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnPurchasePayload>
          }
          deleteMany: {
            args: Prisma.ProductsOnPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsOnPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsOnPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnPurchasePayload>[]
          }
          upsert: {
            args: Prisma.ProductsOnPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnPurchasePayload>
          }
          aggregate: {
            args: Prisma.ProductsOnPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductsOnPurchase>
          }
          groupBy: {
            args: Prisma.ProductsOnPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsOnPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsOnPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsOnPurchaseCountAggregateOutputType> | number
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
    customer?: CustomerOmit
    pet?: PetOmit
    service?: ServiceOmit
    scheduling?: SchedulingOmit
    worker?: WorkerOmit
    workersOnSchedulings?: WorkersOnSchedulingsOmit
    product?: ProductOmit
    purchase?: PurchaseOmit
    productsOnPurchase?: ProductsOnPurchaseOmit
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    purchases: number
    pets: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | CustomerCountOutputTypeCountPurchasesArgs
    pets?: boolean | CustomerCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    scheduling: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduling?: boolean | PetCountOutputTypeCountSchedulingArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountSchedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    scheduling: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduling?: boolean | ServiceCountOutputTypeCountSchedulingArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountSchedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
  }


  /**
   * Count Type SchedulingCountOutputType
   */

  export type SchedulingCountOutputType = {
    workers: number
  }

  export type SchedulingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | SchedulingCountOutputTypeCountWorkersArgs
  }

  // Custom InputTypes
  /**
   * SchedulingCountOutputType without action
   */
  export type SchedulingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingCountOutputType
     */
    select?: SchedulingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchedulingCountOutputType without action
   */
  export type SchedulingCountOutputTypeCountWorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkersOnSchedulingsWhereInput
  }


  /**
   * Count Type WorkerCountOutputType
   */

  export type WorkerCountOutputType = {
    schedulings: number
    sales: number
  }

  export type WorkerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedulings?: boolean | WorkerCountOutputTypeCountSchedulingsArgs
    sales?: boolean | WorkerCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCountOutputType
     */
    select?: WorkerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeCountSchedulingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkersOnSchedulingsWhereInput
  }

  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    purchases: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | ProductCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOnPurchaseWhereInput
  }


  /**
   * Count Type PurchaseCountOutputType
   */

  export type PurchaseCountOutputType = {
    products: number
  }

  export type PurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | PurchaseCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCountOutputType
     */
    select?: PurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOnPurchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    address: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    email: string
    address: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchases?: boolean | Customer$purchasesArgs<ExtArgs>
    pets?: boolean | Customer$petsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "address" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | Customer$purchasesArgs<ExtArgs>
    pets?: boolean | Customer$petsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      pets: Prisma.$PetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      address: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends Customer$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pets<T extends Customer$petsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly password: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.purchases
   */
  export type Customer$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Customer.pets
   */
  export type Customer$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    weight: number | null
  }

  export type PetSumAggregateOutputType = {
    weight: number | null
  }

  export type PetMinAggregateOutputType = {
    id: string | null
    name: string | null
    species: string | null
    race: string | null
    dateOfBirth: Date | null
    weight: number | null
    customerID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    species: string | null
    race: string | null
    dateOfBirth: Date | null
    weight: number | null
    customerID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    species: number
    race: number
    dateOfBirth: number
    weight: number
    customerID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    weight?: true
  }

  export type PetSumAggregateInputType = {
    weight?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    species?: true
    race?: true
    dateOfBirth?: true
    weight?: true
    customerID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    species?: true
    race?: true
    dateOfBirth?: true
    weight?: true
    customerID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    species?: true
    race?: true
    dateOfBirth?: true
    weight?: true
    customerID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: string
    name: string
    species: string
    race: string
    dateOfBirth: Date
    weight: number
    customerID: string
    createdAt: Date
    updatedAt: Date
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    race?: boolean
    dateOfBirth?: boolean
    weight?: boolean
    customerID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    scheduling?: boolean | Pet$schedulingArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    race?: boolean
    dateOfBirth?: boolean
    weight?: boolean
    customerID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    race?: boolean
    dateOfBirth?: boolean
    weight?: boolean
    customerID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    name?: boolean
    species?: boolean
    race?: boolean
    dateOfBirth?: boolean
    weight?: boolean
    customerID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "species" | "race" | "dateOfBirth" | "weight" | "customerID" | "createdAt" | "updatedAt", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    scheduling?: boolean | Pet$schedulingArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      scheduling: Prisma.$SchedulingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      species: string
      race: string
      dateOfBirth: Date
      weight: number
      customerID: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
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
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
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
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scheduling<T extends Pet$schedulingArgs<ExtArgs> = {}>(args?: Subset<T, Pet$schedulingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'String'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly species: FieldRef<"Pet", 'String'>
    readonly race: FieldRef<"Pet", 'String'>
    readonly dateOfBirth: FieldRef<"Pet", 'DateTime'>
    readonly weight: FieldRef<"Pet", 'Float'>
    readonly customerID: FieldRef<"Pet", 'String'>
    readonly createdAt: FieldRef<"Pet", 'DateTime'>
    readonly updatedAt: FieldRef<"Pet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.scheduling
   */
  export type Pet$schedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    cursor?: SchedulingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: number | null
  }

  export type ServiceSumAggregateOutputType = {
    price: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scheduling?: boolean | Service$schedulingArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduling?: boolean | Service$schedulingArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      scheduling: Prisma.$SchedulingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scheduling<T extends Service$schedulingArgs<ExtArgs> = {}>(args?: Subset<T, Service$schedulingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.scheduling
   */
  export type Service$schedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    cursor?: SchedulingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Scheduling
   */

  export type AggregateScheduling = {
    _count: SchedulingCountAggregateOutputType | null
    _min: SchedulingMinAggregateOutputType | null
    _max: SchedulingMaxAggregateOutputType | null
  }

  export type SchedulingMinAggregateOutputType = {
    id: string | null
    petID: string | null
    serviceID: string | null
    date: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchedulingMaxAggregateOutputType = {
    id: string | null
    petID: string | null
    serviceID: string | null
    date: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchedulingCountAggregateOutputType = {
    id: number
    petID: number
    serviceID: number
    date: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchedulingMinAggregateInputType = {
    id?: true
    petID?: true
    serviceID?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchedulingMaxAggregateInputType = {
    id?: true
    petID?: true
    serviceID?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchedulingCountAggregateInputType = {
    id?: true
    petID?: true
    serviceID?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchedulingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scheduling to aggregate.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedulings
    **/
    _count?: true | SchedulingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulingMaxAggregateInputType
  }

  export type GetSchedulingAggregateType<T extends SchedulingAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduling[P]>
      : GetScalarType<T[P], AggregateScheduling[P]>
  }




  export type SchedulingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithAggregationInput | SchedulingOrderByWithAggregationInput[]
    by: SchedulingScalarFieldEnum[] | SchedulingScalarFieldEnum
    having?: SchedulingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulingCountAggregateInputType | true
    _min?: SchedulingMinAggregateInputType
    _max?: SchedulingMaxAggregateInputType
  }

  export type SchedulingGroupByOutputType = {
    id: string
    petID: string
    serviceID: string
    date: Date
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: SchedulingCountAggregateOutputType | null
    _min: SchedulingMinAggregateOutputType | null
    _max: SchedulingMaxAggregateOutputType | null
  }

  type GetSchedulingGroupByPayload<T extends SchedulingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulingGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulingGroupByOutputType[P]>
        }
      >
    >


  export type SchedulingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petID?: boolean
    serviceID?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    workers?: boolean | Scheduling$workersArgs<ExtArgs>
    _count?: boolean | SchedulingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petID?: boolean
    serviceID?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petID?: boolean
    serviceID?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectScalar = {
    id?: boolean
    petID?: boolean
    serviceID?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchedulingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "petID" | "serviceID" | "date" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["scheduling"]>
  export type SchedulingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    workers?: boolean | Scheduling$workersArgs<ExtArgs>
    _count?: boolean | SchedulingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchedulingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type SchedulingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $SchedulingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scheduling"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      workers: Prisma.$WorkersOnSchedulingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      petID: string
      serviceID: string
      date: Date
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scheduling"]>
    composites: {}
  }

  type SchedulingGetPayload<S extends boolean | null | undefined | SchedulingDefaultArgs> = $Result.GetResult<Prisma.$SchedulingPayload, S>

  type SchedulingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchedulingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchedulingCountAggregateInputType | true
    }

  export interface SchedulingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scheduling'], meta: { name: 'Scheduling' } }
    /**
     * Find zero or one Scheduling that matches the filter.
     * @param {SchedulingFindUniqueArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchedulingFindUniqueArgs>(args: SelectSubset<T, SchedulingFindUniqueArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scheduling that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchedulingFindUniqueOrThrowArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchedulingFindUniqueOrThrowArgs>(args: SelectSubset<T, SchedulingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduling that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindFirstArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchedulingFindFirstArgs>(args?: SelectSubset<T, SchedulingFindFirstArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduling that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindFirstOrThrowArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchedulingFindFirstOrThrowArgs>(args?: SelectSubset<T, SchedulingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedulings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedulings
     * const schedulings = await prisma.scheduling.findMany()
     * 
     * // Get first 10 Schedulings
     * const schedulings = await prisma.scheduling.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchedulingFindManyArgs>(args?: SelectSubset<T, SchedulingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scheduling.
     * @param {SchedulingCreateArgs} args - Arguments to create a Scheduling.
     * @example
     * // Create one Scheduling
     * const Scheduling = await prisma.scheduling.create({
     *   data: {
     *     // ... data to create a Scheduling
     *   }
     * })
     * 
     */
    create<T extends SchedulingCreateArgs>(args: SelectSubset<T, SchedulingCreateArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedulings.
     * @param {SchedulingCreateManyArgs} args - Arguments to create many Schedulings.
     * @example
     * // Create many Schedulings
     * const scheduling = await prisma.scheduling.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchedulingCreateManyArgs>(args?: SelectSubset<T, SchedulingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedulings and returns the data saved in the database.
     * @param {SchedulingCreateManyAndReturnArgs} args - Arguments to create many Schedulings.
     * @example
     * // Create many Schedulings
     * const scheduling = await prisma.scheduling.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedulings and only return the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchedulingCreateManyAndReturnArgs>(args?: SelectSubset<T, SchedulingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scheduling.
     * @param {SchedulingDeleteArgs} args - Arguments to delete one Scheduling.
     * @example
     * // Delete one Scheduling
     * const Scheduling = await prisma.scheduling.delete({
     *   where: {
     *     // ... filter to delete one Scheduling
     *   }
     * })
     * 
     */
    delete<T extends SchedulingDeleteArgs>(args: SelectSubset<T, SchedulingDeleteArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scheduling.
     * @param {SchedulingUpdateArgs} args - Arguments to update one Scheduling.
     * @example
     * // Update one Scheduling
     * const scheduling = await prisma.scheduling.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchedulingUpdateArgs>(args: SelectSubset<T, SchedulingUpdateArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedulings.
     * @param {SchedulingDeleteManyArgs} args - Arguments to filter Schedulings to delete.
     * @example
     * // Delete a few Schedulings
     * const { count } = await prisma.scheduling.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchedulingDeleteManyArgs>(args?: SelectSubset<T, SchedulingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedulings
     * const scheduling = await prisma.scheduling.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchedulingUpdateManyArgs>(args: SelectSubset<T, SchedulingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedulings and returns the data updated in the database.
     * @param {SchedulingUpdateManyAndReturnArgs} args - Arguments to update many Schedulings.
     * @example
     * // Update many Schedulings
     * const scheduling = await prisma.scheduling.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedulings and only return the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchedulingUpdateManyAndReturnArgs>(args: SelectSubset<T, SchedulingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scheduling.
     * @param {SchedulingUpsertArgs} args - Arguments to update or create a Scheduling.
     * @example
     * // Update or create a Scheduling
     * const scheduling = await prisma.scheduling.upsert({
     *   create: {
     *     // ... data to create a Scheduling
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scheduling we want to update
     *   }
     * })
     */
    upsert<T extends SchedulingUpsertArgs>(args: SelectSubset<T, SchedulingUpsertArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingCountArgs} args - Arguments to filter Schedulings to count.
     * @example
     * // Count the number of Schedulings
     * const count = await prisma.scheduling.count({
     *   where: {
     *     // ... the filter for the Schedulings we want to count
     *   }
     * })
    **/
    count<T extends SchedulingCountArgs>(
      args?: Subset<T, SchedulingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scheduling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulingAggregateArgs>(args: Subset<T, SchedulingAggregateArgs>): Prisma.PrismaPromise<GetSchedulingAggregateType<T>>

    /**
     * Group by Scheduling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingGroupByArgs} args - Group by arguments.
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
      T extends SchedulingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchedulingGroupByArgs['orderBy'] }
        : { orderBy?: SchedulingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchedulingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scheduling model
   */
  readonly fields: SchedulingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scheduling.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchedulingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workers<T extends Scheduling$workersArgs<ExtArgs> = {}>(args?: Subset<T, Scheduling$workersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Scheduling model
   */
  interface SchedulingFieldRefs {
    readonly id: FieldRef<"Scheduling", 'String'>
    readonly petID: FieldRef<"Scheduling", 'String'>
    readonly serviceID: FieldRef<"Scheduling", 'String'>
    readonly date: FieldRef<"Scheduling", 'DateTime'>
    readonly status: FieldRef<"Scheduling", 'Status'>
    readonly createdAt: FieldRef<"Scheduling", 'DateTime'>
    readonly updatedAt: FieldRef<"Scheduling", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Scheduling findUnique
   */
  export type SchedulingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling findUniqueOrThrow
   */
  export type SchedulingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling findFirst
   */
  export type SchedulingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedulings.
     */
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling findFirstOrThrow
   */
  export type SchedulingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedulings.
     */
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling findMany
   */
  export type SchedulingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Schedulings to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling create
   */
  export type SchedulingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The data needed to create a Scheduling.
     */
    data: XOR<SchedulingCreateInput, SchedulingUncheckedCreateInput>
  }

  /**
   * Scheduling createMany
   */
  export type SchedulingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedulings.
     */
    data: SchedulingCreateManyInput | SchedulingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scheduling createManyAndReturn
   */
  export type SchedulingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * The data used to create many Schedulings.
     */
    data: SchedulingCreateManyInput | SchedulingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scheduling update
   */
  export type SchedulingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The data needed to update a Scheduling.
     */
    data: XOR<SchedulingUpdateInput, SchedulingUncheckedUpdateInput>
    /**
     * Choose, which Scheduling to update.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling updateMany
   */
  export type SchedulingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedulings.
     */
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyInput>
    /**
     * Filter which Schedulings to update
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to update.
     */
    limit?: number
  }

  /**
   * Scheduling updateManyAndReturn
   */
  export type SchedulingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * The data used to update Schedulings.
     */
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyInput>
    /**
     * Filter which Schedulings to update
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scheduling upsert
   */
  export type SchedulingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The filter to search for the Scheduling to update in case it exists.
     */
    where: SchedulingWhereUniqueInput
    /**
     * In case the Scheduling found by the `where` argument doesn't exist, create a new Scheduling with this data.
     */
    create: XOR<SchedulingCreateInput, SchedulingUncheckedCreateInput>
    /**
     * In case the Scheduling was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchedulingUpdateInput, SchedulingUncheckedUpdateInput>
  }

  /**
   * Scheduling delete
   */
  export type SchedulingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter which Scheduling to delete.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling deleteMany
   */
  export type SchedulingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedulings to delete
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to delete.
     */
    limit?: number
  }

  /**
   * Scheduling.workers
   */
  export type Scheduling$workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
    where?: WorkersOnSchedulingsWhereInput
    orderBy?: WorkersOnSchedulingsOrderByWithRelationInput | WorkersOnSchedulingsOrderByWithRelationInput[]
    cursor?: WorkersOnSchedulingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkersOnSchedulingsScalarFieldEnum | WorkersOnSchedulingsScalarFieldEnum[]
  }

  /**
   * Scheduling without action
   */
  export type SchedulingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
  }


  /**
   * Model Worker
   */

  export type AggregateWorker = {
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  export type WorkerAvgAggregateOutputType = {
    salary: number | null
  }

  export type WorkerSumAggregateOutputType = {
    salary: number | null
  }

  export type WorkerMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.Role | null
    email: string | null
    salary: number | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.Role | null
    email: string | null
    salary: number | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkerCountAggregateOutputType = {
    id: number
    name: number
    role: number
    email: number
    salary: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkerAvgAggregateInputType = {
    salary?: true
  }

  export type WorkerSumAggregateInputType = {
    salary?: true
  }

  export type WorkerMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    salary?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkerMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    salary?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkerCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    salary?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worker to aggregate.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workers
    **/
    _count?: true | WorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerMaxAggregateInputType
  }

  export type GetWorkerAggregateType<T extends WorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorker[P]>
      : GetScalarType<T[P], AggregateWorker[P]>
  }




  export type WorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerWhereInput
    orderBy?: WorkerOrderByWithAggregationInput | WorkerOrderByWithAggregationInput[]
    by: WorkerScalarFieldEnum[] | WorkerScalarFieldEnum
    having?: WorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerCountAggregateInputType | true
    _avg?: WorkerAvgAggregateInputType
    _sum?: WorkerSumAggregateInputType
    _min?: WorkerMinAggregateInputType
    _max?: WorkerMaxAggregateInputType
  }

  export type WorkerGroupByOutputType = {
    id: string
    name: string
    role: $Enums.Role
    email: string
    salary: number
    password: string
    createdAt: Date
    updatedAt: Date
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  type GetWorkerGroupByPayload<T extends WorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerGroupByOutputType[P]>
        }
      >
    >


  export type WorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    salary?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedulings?: boolean | Worker$schedulingsArgs<ExtArgs>
    sales?: boolean | Worker$salesArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    salary?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    salary?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    salary?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "email" | "salary" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["worker"]>
  export type WorkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedulings?: boolean | Worker$schedulingsArgs<ExtArgs>
    sales?: boolean | Worker$salesArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Worker"
    objects: {
      schedulings: Prisma.$WorkersOnSchedulingsPayload<ExtArgs>[]
      sales: Prisma.$PurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: $Enums.Role
      email: string
      salary: number
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["worker"]>
    composites: {}
  }

  type WorkerGetPayload<S extends boolean | null | undefined | WorkerDefaultArgs> = $Result.GetResult<Prisma.$WorkerPayload, S>

  type WorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkerCountAggregateInputType | true
    }

  export interface WorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Worker'], meta: { name: 'Worker' } }
    /**
     * Find zero or one Worker that matches the filter.
     * @param {WorkerFindUniqueArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerFindUniqueArgs>(args: SelectSubset<T, WorkerFindUniqueArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Worker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkerFindUniqueOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerFindFirstArgs>(args?: SelectSubset<T, WorkerFindFirstArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workers
     * const workers = await prisma.worker.findMany()
     * 
     * // Get first 10 Workers
     * const workers = await prisma.worker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workerWithIdOnly = await prisma.worker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkerFindManyArgs>(args?: SelectSubset<T, WorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Worker.
     * @param {WorkerCreateArgs} args - Arguments to create a Worker.
     * @example
     * // Create one Worker
     * const Worker = await prisma.worker.create({
     *   data: {
     *     // ... data to create a Worker
     *   }
     * })
     * 
     */
    create<T extends WorkerCreateArgs>(args: SelectSubset<T, WorkerCreateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workers.
     * @param {WorkerCreateManyArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerCreateManyArgs>(args?: SelectSubset<T, WorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workers and returns the data saved in the database.
     * @param {WorkerCreateManyAndReturnArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workers and only return the `id`
     * const workerWithIdOnly = await prisma.worker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkerCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Worker.
     * @param {WorkerDeleteArgs} args - Arguments to delete one Worker.
     * @example
     * // Delete one Worker
     * const Worker = await prisma.worker.delete({
     *   where: {
     *     // ... filter to delete one Worker
     *   }
     * })
     * 
     */
    delete<T extends WorkerDeleteArgs>(args: SelectSubset<T, WorkerDeleteArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Worker.
     * @param {WorkerUpdateArgs} args - Arguments to update one Worker.
     * @example
     * // Update one Worker
     * const worker = await prisma.worker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerUpdateArgs>(args: SelectSubset<T, WorkerUpdateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workers.
     * @param {WorkerDeleteManyArgs} args - Arguments to filter Workers to delete.
     * @example
     * // Delete a few Workers
     * const { count } = await prisma.worker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerDeleteManyArgs>(args?: SelectSubset<T, WorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerUpdateManyArgs>(args: SelectSubset<T, WorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers and returns the data updated in the database.
     * @param {WorkerUpdateManyAndReturnArgs} args - Arguments to update many Workers.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workers and only return the `id`
     * const workerWithIdOnly = await prisma.worker.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkerUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Worker.
     * @param {WorkerUpsertArgs} args - Arguments to update or create a Worker.
     * @example
     * // Update or create a Worker
     * const worker = await prisma.worker.upsert({
     *   create: {
     *     // ... data to create a Worker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worker we want to update
     *   }
     * })
     */
    upsert<T extends WorkerUpsertArgs>(args: SelectSubset<T, WorkerUpsertArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCountArgs} args - Arguments to filter Workers to count.
     * @example
     * // Count the number of Workers
     * const count = await prisma.worker.count({
     *   where: {
     *     // ... the filter for the Workers we want to count
     *   }
     * })
    **/
    count<T extends WorkerCountArgs>(
      args?: Subset<T, WorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkerAggregateArgs>(args: Subset<T, WorkerAggregateArgs>): Prisma.PrismaPromise<GetWorkerAggregateType<T>>

    /**
     * Group by Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerGroupByArgs} args - Group by arguments.
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
      T extends WorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerGroupByArgs['orderBy'] }
        : { orderBy?: WorkerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Worker model
   */
  readonly fields: WorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Worker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedulings<T extends Worker$schedulingsArgs<ExtArgs> = {}>(args?: Subset<T, Worker$schedulingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends Worker$salesArgs<ExtArgs> = {}>(args?: Subset<T, Worker$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Worker model
   */
  interface WorkerFieldRefs {
    readonly id: FieldRef<"Worker", 'String'>
    readonly name: FieldRef<"Worker", 'String'>
    readonly role: FieldRef<"Worker", 'Role'>
    readonly email: FieldRef<"Worker", 'String'>
    readonly salary: FieldRef<"Worker", 'Float'>
    readonly password: FieldRef<"Worker", 'String'>
    readonly createdAt: FieldRef<"Worker", 'DateTime'>
    readonly updatedAt: FieldRef<"Worker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Worker findUnique
   */
  export type WorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findUniqueOrThrow
   */
  export type WorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findFirst
   */
  export type WorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findFirstOrThrow
   */
  export type WorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findMany
   */
  export type WorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Workers to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker create
   */
  export type WorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to create a Worker.
     */
    data: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
  }

  /**
   * Worker createMany
   */
  export type WorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worker createManyAndReturn
   */
  export type WorkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worker update
   */
  export type WorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to update a Worker.
     */
    data: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
    /**
     * Choose, which Worker to update.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker updateMany
   */
  export type WorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workers.
     */
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to update.
     */
    limit?: number
  }

  /**
   * Worker updateManyAndReturn
   */
  export type WorkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * The data used to update Workers.
     */
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to update.
     */
    limit?: number
  }

  /**
   * Worker upsert
   */
  export type WorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The filter to search for the Worker to update in case it exists.
     */
    where: WorkerWhereUniqueInput
    /**
     * In case the Worker found by the `where` argument doesn't exist, create a new Worker with this data.
     */
    create: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
    /**
     * In case the Worker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
  }

  /**
   * Worker delete
   */
  export type WorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter which Worker to delete.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker deleteMany
   */
  export type WorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workers to delete
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to delete.
     */
    limit?: number
  }

  /**
   * Worker.schedulings
   */
  export type Worker$schedulingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
    where?: WorkersOnSchedulingsWhereInput
    orderBy?: WorkersOnSchedulingsOrderByWithRelationInput | WorkersOnSchedulingsOrderByWithRelationInput[]
    cursor?: WorkersOnSchedulingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkersOnSchedulingsScalarFieldEnum | WorkersOnSchedulingsScalarFieldEnum[]
  }

  /**
   * Worker.sales
   */
  export type Worker$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Worker without action
   */
  export type WorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
  }


  /**
   * Model WorkersOnSchedulings
   */

  export type AggregateWorkersOnSchedulings = {
    _count: WorkersOnSchedulingsCountAggregateOutputType | null
    _min: WorkersOnSchedulingsMinAggregateOutputType | null
    _max: WorkersOnSchedulingsMaxAggregateOutputType | null
  }

  export type WorkersOnSchedulingsMinAggregateOutputType = {
    workerID: string | null
    schedulingID: string | null
  }

  export type WorkersOnSchedulingsMaxAggregateOutputType = {
    workerID: string | null
    schedulingID: string | null
  }

  export type WorkersOnSchedulingsCountAggregateOutputType = {
    workerID: number
    schedulingID: number
    _all: number
  }


  export type WorkersOnSchedulingsMinAggregateInputType = {
    workerID?: true
    schedulingID?: true
  }

  export type WorkersOnSchedulingsMaxAggregateInputType = {
    workerID?: true
    schedulingID?: true
  }

  export type WorkersOnSchedulingsCountAggregateInputType = {
    workerID?: true
    schedulingID?: true
    _all?: true
  }

  export type WorkersOnSchedulingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkersOnSchedulings to aggregate.
     */
    where?: WorkersOnSchedulingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkersOnSchedulings to fetch.
     */
    orderBy?: WorkersOnSchedulingsOrderByWithRelationInput | WorkersOnSchedulingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkersOnSchedulingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkersOnSchedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkersOnSchedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkersOnSchedulings
    **/
    _count?: true | WorkersOnSchedulingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkersOnSchedulingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkersOnSchedulingsMaxAggregateInputType
  }

  export type GetWorkersOnSchedulingsAggregateType<T extends WorkersOnSchedulingsAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkersOnSchedulings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkersOnSchedulings[P]>
      : GetScalarType<T[P], AggregateWorkersOnSchedulings[P]>
  }




  export type WorkersOnSchedulingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkersOnSchedulingsWhereInput
    orderBy?: WorkersOnSchedulingsOrderByWithAggregationInput | WorkersOnSchedulingsOrderByWithAggregationInput[]
    by: WorkersOnSchedulingsScalarFieldEnum[] | WorkersOnSchedulingsScalarFieldEnum
    having?: WorkersOnSchedulingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkersOnSchedulingsCountAggregateInputType | true
    _min?: WorkersOnSchedulingsMinAggregateInputType
    _max?: WorkersOnSchedulingsMaxAggregateInputType
  }

  export type WorkersOnSchedulingsGroupByOutputType = {
    workerID: string
    schedulingID: string
    _count: WorkersOnSchedulingsCountAggregateOutputType | null
    _min: WorkersOnSchedulingsMinAggregateOutputType | null
    _max: WorkersOnSchedulingsMaxAggregateOutputType | null
  }

  type GetWorkersOnSchedulingsGroupByPayload<T extends WorkersOnSchedulingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkersOnSchedulingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkersOnSchedulingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkersOnSchedulingsGroupByOutputType[P]>
            : GetScalarType<T[P], WorkersOnSchedulingsGroupByOutputType[P]>
        }
      >
    >


  export type WorkersOnSchedulingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workerID?: boolean
    schedulingID?: boolean
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workersOnSchedulings"]>

  export type WorkersOnSchedulingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workerID?: boolean
    schedulingID?: boolean
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workersOnSchedulings"]>

  export type WorkersOnSchedulingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workerID?: boolean
    schedulingID?: boolean
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workersOnSchedulings"]>

  export type WorkersOnSchedulingsSelectScalar = {
    workerID?: boolean
    schedulingID?: boolean
  }

  export type WorkersOnSchedulingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workerID" | "schedulingID", ExtArgs["result"]["workersOnSchedulings"]>
  export type WorkersOnSchedulingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
  }
  export type WorkersOnSchedulingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
  }
  export type WorkersOnSchedulingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
  }

  export type $WorkersOnSchedulingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkersOnSchedulings"
    objects: {
      worker: Prisma.$WorkerPayload<ExtArgs>
      scheduling: Prisma.$SchedulingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      workerID: string
      schedulingID: string
    }, ExtArgs["result"]["workersOnSchedulings"]>
    composites: {}
  }

  type WorkersOnSchedulingsGetPayload<S extends boolean | null | undefined | WorkersOnSchedulingsDefaultArgs> = $Result.GetResult<Prisma.$WorkersOnSchedulingsPayload, S>

  type WorkersOnSchedulingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkersOnSchedulingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkersOnSchedulingsCountAggregateInputType | true
    }

  export interface WorkersOnSchedulingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkersOnSchedulings'], meta: { name: 'WorkersOnSchedulings' } }
    /**
     * Find zero or one WorkersOnSchedulings that matches the filter.
     * @param {WorkersOnSchedulingsFindUniqueArgs} args - Arguments to find a WorkersOnSchedulings
     * @example
     * // Get one WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkersOnSchedulingsFindUniqueArgs>(args: SelectSubset<T, WorkersOnSchedulingsFindUniqueArgs<ExtArgs>>): Prisma__WorkersOnSchedulingsClient<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkersOnSchedulings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkersOnSchedulingsFindUniqueOrThrowArgs} args - Arguments to find a WorkersOnSchedulings
     * @example
     * // Get one WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkersOnSchedulingsFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkersOnSchedulingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkersOnSchedulingsClient<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkersOnSchedulings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnSchedulingsFindFirstArgs} args - Arguments to find a WorkersOnSchedulings
     * @example
     * // Get one WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkersOnSchedulingsFindFirstArgs>(args?: SelectSubset<T, WorkersOnSchedulingsFindFirstArgs<ExtArgs>>): Prisma__WorkersOnSchedulingsClient<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkersOnSchedulings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnSchedulingsFindFirstOrThrowArgs} args - Arguments to find a WorkersOnSchedulings
     * @example
     * // Get one WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkersOnSchedulingsFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkersOnSchedulingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkersOnSchedulingsClient<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkersOnSchedulings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnSchedulingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.findMany()
     * 
     * // Get first 10 WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.findMany({ take: 10 })
     * 
     * // Only select the `workerID`
     * const workersOnSchedulingsWithWorkerIDOnly = await prisma.workersOnSchedulings.findMany({ select: { workerID: true } })
     * 
     */
    findMany<T extends WorkersOnSchedulingsFindManyArgs>(args?: SelectSubset<T, WorkersOnSchedulingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkersOnSchedulings.
     * @param {WorkersOnSchedulingsCreateArgs} args - Arguments to create a WorkersOnSchedulings.
     * @example
     * // Create one WorkersOnSchedulings
     * const WorkersOnSchedulings = await prisma.workersOnSchedulings.create({
     *   data: {
     *     // ... data to create a WorkersOnSchedulings
     *   }
     * })
     * 
     */
    create<T extends WorkersOnSchedulingsCreateArgs>(args: SelectSubset<T, WorkersOnSchedulingsCreateArgs<ExtArgs>>): Prisma__WorkersOnSchedulingsClient<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkersOnSchedulings.
     * @param {WorkersOnSchedulingsCreateManyArgs} args - Arguments to create many WorkersOnSchedulings.
     * @example
     * // Create many WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkersOnSchedulingsCreateManyArgs>(args?: SelectSubset<T, WorkersOnSchedulingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkersOnSchedulings and returns the data saved in the database.
     * @param {WorkersOnSchedulingsCreateManyAndReturnArgs} args - Arguments to create many WorkersOnSchedulings.
     * @example
     * // Create many WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkersOnSchedulings and only return the `workerID`
     * const workersOnSchedulingsWithWorkerIDOnly = await prisma.workersOnSchedulings.createManyAndReturn({
     *   select: { workerID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkersOnSchedulingsCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkersOnSchedulingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkersOnSchedulings.
     * @param {WorkersOnSchedulingsDeleteArgs} args - Arguments to delete one WorkersOnSchedulings.
     * @example
     * // Delete one WorkersOnSchedulings
     * const WorkersOnSchedulings = await prisma.workersOnSchedulings.delete({
     *   where: {
     *     // ... filter to delete one WorkersOnSchedulings
     *   }
     * })
     * 
     */
    delete<T extends WorkersOnSchedulingsDeleteArgs>(args: SelectSubset<T, WorkersOnSchedulingsDeleteArgs<ExtArgs>>): Prisma__WorkersOnSchedulingsClient<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkersOnSchedulings.
     * @param {WorkersOnSchedulingsUpdateArgs} args - Arguments to update one WorkersOnSchedulings.
     * @example
     * // Update one WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkersOnSchedulingsUpdateArgs>(args: SelectSubset<T, WorkersOnSchedulingsUpdateArgs<ExtArgs>>): Prisma__WorkersOnSchedulingsClient<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkersOnSchedulings.
     * @param {WorkersOnSchedulingsDeleteManyArgs} args - Arguments to filter WorkersOnSchedulings to delete.
     * @example
     * // Delete a few WorkersOnSchedulings
     * const { count } = await prisma.workersOnSchedulings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkersOnSchedulingsDeleteManyArgs>(args?: SelectSubset<T, WorkersOnSchedulingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkersOnSchedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnSchedulingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkersOnSchedulingsUpdateManyArgs>(args: SelectSubset<T, WorkersOnSchedulingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkersOnSchedulings and returns the data updated in the database.
     * @param {WorkersOnSchedulingsUpdateManyAndReturnArgs} args - Arguments to update many WorkersOnSchedulings.
     * @example
     * // Update many WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkersOnSchedulings and only return the `workerID`
     * const workersOnSchedulingsWithWorkerIDOnly = await prisma.workersOnSchedulings.updateManyAndReturn({
     *   select: { workerID: true },
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
    updateManyAndReturn<T extends WorkersOnSchedulingsUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkersOnSchedulingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkersOnSchedulings.
     * @param {WorkersOnSchedulingsUpsertArgs} args - Arguments to update or create a WorkersOnSchedulings.
     * @example
     * // Update or create a WorkersOnSchedulings
     * const workersOnSchedulings = await prisma.workersOnSchedulings.upsert({
     *   create: {
     *     // ... data to create a WorkersOnSchedulings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkersOnSchedulings we want to update
     *   }
     * })
     */
    upsert<T extends WorkersOnSchedulingsUpsertArgs>(args: SelectSubset<T, WorkersOnSchedulingsUpsertArgs<ExtArgs>>): Prisma__WorkersOnSchedulingsClient<$Result.GetResult<Prisma.$WorkersOnSchedulingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkersOnSchedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnSchedulingsCountArgs} args - Arguments to filter WorkersOnSchedulings to count.
     * @example
     * // Count the number of WorkersOnSchedulings
     * const count = await prisma.workersOnSchedulings.count({
     *   where: {
     *     // ... the filter for the WorkersOnSchedulings we want to count
     *   }
     * })
    **/
    count<T extends WorkersOnSchedulingsCountArgs>(
      args?: Subset<T, WorkersOnSchedulingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkersOnSchedulingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkersOnSchedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnSchedulingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkersOnSchedulingsAggregateArgs>(args: Subset<T, WorkersOnSchedulingsAggregateArgs>): Prisma.PrismaPromise<GetWorkersOnSchedulingsAggregateType<T>>

    /**
     * Group by WorkersOnSchedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersOnSchedulingsGroupByArgs} args - Group by arguments.
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
      T extends WorkersOnSchedulingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkersOnSchedulingsGroupByArgs['orderBy'] }
        : { orderBy?: WorkersOnSchedulingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkersOnSchedulingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkersOnSchedulingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkersOnSchedulings model
   */
  readonly fields: WorkersOnSchedulingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkersOnSchedulings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkersOnSchedulingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    worker<T extends WorkerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerDefaultArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scheduling<T extends SchedulingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchedulingDefaultArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkersOnSchedulings model
   */
  interface WorkersOnSchedulingsFieldRefs {
    readonly workerID: FieldRef<"WorkersOnSchedulings", 'String'>
    readonly schedulingID: FieldRef<"WorkersOnSchedulings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkersOnSchedulings findUnique
   */
  export type WorkersOnSchedulingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
    /**
     * Filter, which WorkersOnSchedulings to fetch.
     */
    where: WorkersOnSchedulingsWhereUniqueInput
  }

  /**
   * WorkersOnSchedulings findUniqueOrThrow
   */
  export type WorkersOnSchedulingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
    /**
     * Filter, which WorkersOnSchedulings to fetch.
     */
    where: WorkersOnSchedulingsWhereUniqueInput
  }

  /**
   * WorkersOnSchedulings findFirst
   */
  export type WorkersOnSchedulingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
    /**
     * Filter, which WorkersOnSchedulings to fetch.
     */
    where?: WorkersOnSchedulingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkersOnSchedulings to fetch.
     */
    orderBy?: WorkersOnSchedulingsOrderByWithRelationInput | WorkersOnSchedulingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkersOnSchedulings.
     */
    cursor?: WorkersOnSchedulingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkersOnSchedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkersOnSchedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkersOnSchedulings.
     */
    distinct?: WorkersOnSchedulingsScalarFieldEnum | WorkersOnSchedulingsScalarFieldEnum[]
  }

  /**
   * WorkersOnSchedulings findFirstOrThrow
   */
  export type WorkersOnSchedulingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
    /**
     * Filter, which WorkersOnSchedulings to fetch.
     */
    where?: WorkersOnSchedulingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkersOnSchedulings to fetch.
     */
    orderBy?: WorkersOnSchedulingsOrderByWithRelationInput | WorkersOnSchedulingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkersOnSchedulings.
     */
    cursor?: WorkersOnSchedulingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkersOnSchedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkersOnSchedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkersOnSchedulings.
     */
    distinct?: WorkersOnSchedulingsScalarFieldEnum | WorkersOnSchedulingsScalarFieldEnum[]
  }

  /**
   * WorkersOnSchedulings findMany
   */
  export type WorkersOnSchedulingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
    /**
     * Filter, which WorkersOnSchedulings to fetch.
     */
    where?: WorkersOnSchedulingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkersOnSchedulings to fetch.
     */
    orderBy?: WorkersOnSchedulingsOrderByWithRelationInput | WorkersOnSchedulingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkersOnSchedulings.
     */
    cursor?: WorkersOnSchedulingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkersOnSchedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkersOnSchedulings.
     */
    skip?: number
    distinct?: WorkersOnSchedulingsScalarFieldEnum | WorkersOnSchedulingsScalarFieldEnum[]
  }

  /**
   * WorkersOnSchedulings create
   */
  export type WorkersOnSchedulingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkersOnSchedulings.
     */
    data: XOR<WorkersOnSchedulingsCreateInput, WorkersOnSchedulingsUncheckedCreateInput>
  }

  /**
   * WorkersOnSchedulings createMany
   */
  export type WorkersOnSchedulingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkersOnSchedulings.
     */
    data: WorkersOnSchedulingsCreateManyInput | WorkersOnSchedulingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkersOnSchedulings createManyAndReturn
   */
  export type WorkersOnSchedulingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * The data used to create many WorkersOnSchedulings.
     */
    data: WorkersOnSchedulingsCreateManyInput | WorkersOnSchedulingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkersOnSchedulings update
   */
  export type WorkersOnSchedulingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkersOnSchedulings.
     */
    data: XOR<WorkersOnSchedulingsUpdateInput, WorkersOnSchedulingsUncheckedUpdateInput>
    /**
     * Choose, which WorkersOnSchedulings to update.
     */
    where: WorkersOnSchedulingsWhereUniqueInput
  }

  /**
   * WorkersOnSchedulings updateMany
   */
  export type WorkersOnSchedulingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkersOnSchedulings.
     */
    data: XOR<WorkersOnSchedulingsUpdateManyMutationInput, WorkersOnSchedulingsUncheckedUpdateManyInput>
    /**
     * Filter which WorkersOnSchedulings to update
     */
    where?: WorkersOnSchedulingsWhereInput
    /**
     * Limit how many WorkersOnSchedulings to update.
     */
    limit?: number
  }

  /**
   * WorkersOnSchedulings updateManyAndReturn
   */
  export type WorkersOnSchedulingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * The data used to update WorkersOnSchedulings.
     */
    data: XOR<WorkersOnSchedulingsUpdateManyMutationInput, WorkersOnSchedulingsUncheckedUpdateManyInput>
    /**
     * Filter which WorkersOnSchedulings to update
     */
    where?: WorkersOnSchedulingsWhereInput
    /**
     * Limit how many WorkersOnSchedulings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkersOnSchedulings upsert
   */
  export type WorkersOnSchedulingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkersOnSchedulings to update in case it exists.
     */
    where: WorkersOnSchedulingsWhereUniqueInput
    /**
     * In case the WorkersOnSchedulings found by the `where` argument doesn't exist, create a new WorkersOnSchedulings with this data.
     */
    create: XOR<WorkersOnSchedulingsCreateInput, WorkersOnSchedulingsUncheckedCreateInput>
    /**
     * In case the WorkersOnSchedulings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkersOnSchedulingsUpdateInput, WorkersOnSchedulingsUncheckedUpdateInput>
  }

  /**
   * WorkersOnSchedulings delete
   */
  export type WorkersOnSchedulingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
    /**
     * Filter which WorkersOnSchedulings to delete.
     */
    where: WorkersOnSchedulingsWhereUniqueInput
  }

  /**
   * WorkersOnSchedulings deleteMany
   */
  export type WorkersOnSchedulingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkersOnSchedulings to delete
     */
    where?: WorkersOnSchedulingsWhereInput
    /**
     * Limit how many WorkersOnSchedulings to delete.
     */
    limit?: number
  }

  /**
   * WorkersOnSchedulings without action
   */
  export type WorkersOnSchedulingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersOnSchedulings
     */
    select?: WorkersOnSchedulingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkersOnSchedulings
     */
    omit?: WorkersOnSchedulingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkersOnSchedulingsInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    quantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchases?: boolean | Product$purchasesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | Product$purchasesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      purchases: Prisma.$ProductsOnPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number
      quantity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends Product$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Product$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.purchases
   */
  export type Product$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
    where?: ProductsOnPurchaseWhereInput
    orderBy?: ProductsOnPurchaseOrderByWithRelationInput | ProductsOnPurchaseOrderByWithRelationInput[]
    cursor?: ProductsOnPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsOnPurchaseScalarFieldEnum | ProductsOnPurchaseScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    total: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    total: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    customerID: string | null
    workerID: string | null
    total: number | null
    createdAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    customerID: string | null
    workerID: string | null
    total: number | null
    createdAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    customerID: number
    workerID: number
    total: number
    createdAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    total?: true
  }

  export type PurchaseSumAggregateInputType = {
    total?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    customerID?: true
    workerID?: true
    total?: true
    createdAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    customerID?: true
    workerID?: true
    total?: true
    createdAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    customerID?: true
    workerID?: true
    total?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    customerID: string
    workerID: string
    total: number
    createdAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerID?: boolean
    workerID?: boolean
    total?: boolean
    createdAt?: boolean
    products?: boolean | Purchase$productsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerID?: boolean
    workerID?: boolean
    total?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerID?: boolean
    workerID?: boolean
    total?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    customerID?: boolean
    workerID?: boolean
    total?: boolean
    createdAt?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerID" | "workerID" | "total" | "createdAt", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Purchase$productsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      products: Prisma.$ProductsOnPurchasePayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs>
      worker: Prisma.$WorkerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerID: string
      workerID: string
      total: number
      createdAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
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
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Purchase$productsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    worker<T extends WorkerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerDefaultArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly customerID: FieldRef<"Purchase", 'String'>
    readonly workerID: FieldRef<"Purchase", 'String'>
    readonly total: FieldRef<"Purchase", 'Float'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase.products
   */
  export type Purchase$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
    where?: ProductsOnPurchaseWhereInput
    orderBy?: ProductsOnPurchaseOrderByWithRelationInput | ProductsOnPurchaseOrderByWithRelationInput[]
    cursor?: ProductsOnPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsOnPurchaseScalarFieldEnum | ProductsOnPurchaseScalarFieldEnum[]
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model ProductsOnPurchase
   */

  export type AggregateProductsOnPurchase = {
    _count: ProductsOnPurchaseCountAggregateOutputType | null
    _min: ProductsOnPurchaseMinAggregateOutputType | null
    _max: ProductsOnPurchaseMaxAggregateOutputType | null
  }

  export type ProductsOnPurchaseMinAggregateOutputType = {
    productID: string | null
    purchaseID: string | null
  }

  export type ProductsOnPurchaseMaxAggregateOutputType = {
    productID: string | null
    purchaseID: string | null
  }

  export type ProductsOnPurchaseCountAggregateOutputType = {
    productID: number
    purchaseID: number
    _all: number
  }


  export type ProductsOnPurchaseMinAggregateInputType = {
    productID?: true
    purchaseID?: true
  }

  export type ProductsOnPurchaseMaxAggregateInputType = {
    productID?: true
    purchaseID?: true
  }

  export type ProductsOnPurchaseCountAggregateInputType = {
    productID?: true
    purchaseID?: true
    _all?: true
  }

  export type ProductsOnPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsOnPurchase to aggregate.
     */
    where?: ProductsOnPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnPurchases to fetch.
     */
    orderBy?: ProductsOnPurchaseOrderByWithRelationInput | ProductsOnPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsOnPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductsOnPurchases
    **/
    _count?: true | ProductsOnPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsOnPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsOnPurchaseMaxAggregateInputType
  }

  export type GetProductsOnPurchaseAggregateType<T extends ProductsOnPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsOnPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsOnPurchase[P]>
      : GetScalarType<T[P], AggregateProductsOnPurchase[P]>
  }




  export type ProductsOnPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOnPurchaseWhereInput
    orderBy?: ProductsOnPurchaseOrderByWithAggregationInput | ProductsOnPurchaseOrderByWithAggregationInput[]
    by: ProductsOnPurchaseScalarFieldEnum[] | ProductsOnPurchaseScalarFieldEnum
    having?: ProductsOnPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsOnPurchaseCountAggregateInputType | true
    _min?: ProductsOnPurchaseMinAggregateInputType
    _max?: ProductsOnPurchaseMaxAggregateInputType
  }

  export type ProductsOnPurchaseGroupByOutputType = {
    productID: string
    purchaseID: string
    _count: ProductsOnPurchaseCountAggregateOutputType | null
    _min: ProductsOnPurchaseMinAggregateOutputType | null
    _max: ProductsOnPurchaseMaxAggregateOutputType | null
  }

  type GetProductsOnPurchaseGroupByPayload<T extends ProductsOnPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsOnPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsOnPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsOnPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsOnPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type ProductsOnPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productID?: boolean
    purchaseID?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsOnPurchase"]>

  export type ProductsOnPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productID?: boolean
    purchaseID?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsOnPurchase"]>

  export type ProductsOnPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productID?: boolean
    purchaseID?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsOnPurchase"]>

  export type ProductsOnPurchaseSelectScalar = {
    productID?: boolean
    purchaseID?: boolean
  }

  export type ProductsOnPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productID" | "purchaseID", ExtArgs["result"]["productsOnPurchase"]>
  export type ProductsOnPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type ProductsOnPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type ProductsOnPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }

  export type $ProductsOnPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductsOnPurchase"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      purchase: Prisma.$PurchasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productID: string
      purchaseID: string
    }, ExtArgs["result"]["productsOnPurchase"]>
    composites: {}
  }

  type ProductsOnPurchaseGetPayload<S extends boolean | null | undefined | ProductsOnPurchaseDefaultArgs> = $Result.GetResult<Prisma.$ProductsOnPurchasePayload, S>

  type ProductsOnPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsOnPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsOnPurchaseCountAggregateInputType | true
    }

  export interface ProductsOnPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductsOnPurchase'], meta: { name: 'ProductsOnPurchase' } }
    /**
     * Find zero or one ProductsOnPurchase that matches the filter.
     * @param {ProductsOnPurchaseFindUniqueArgs} args - Arguments to find a ProductsOnPurchase
     * @example
     * // Get one ProductsOnPurchase
     * const productsOnPurchase = await prisma.productsOnPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsOnPurchaseFindUniqueArgs>(args: SelectSubset<T, ProductsOnPurchaseFindUniqueArgs<ExtArgs>>): Prisma__ProductsOnPurchaseClient<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductsOnPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsOnPurchaseFindUniqueOrThrowArgs} args - Arguments to find a ProductsOnPurchase
     * @example
     * // Get one ProductsOnPurchase
     * const productsOnPurchase = await prisma.productsOnPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsOnPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsOnPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsOnPurchaseClient<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsOnPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnPurchaseFindFirstArgs} args - Arguments to find a ProductsOnPurchase
     * @example
     * // Get one ProductsOnPurchase
     * const productsOnPurchase = await prisma.productsOnPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsOnPurchaseFindFirstArgs>(args?: SelectSubset<T, ProductsOnPurchaseFindFirstArgs<ExtArgs>>): Prisma__ProductsOnPurchaseClient<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsOnPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnPurchaseFindFirstOrThrowArgs} args - Arguments to find a ProductsOnPurchase
     * @example
     * // Get one ProductsOnPurchase
     * const productsOnPurchase = await prisma.productsOnPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsOnPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsOnPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsOnPurchaseClient<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductsOnPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsOnPurchases
     * const productsOnPurchases = await prisma.productsOnPurchase.findMany()
     * 
     * // Get first 10 ProductsOnPurchases
     * const productsOnPurchases = await prisma.productsOnPurchase.findMany({ take: 10 })
     * 
     * // Only select the `productID`
     * const productsOnPurchaseWithProductIDOnly = await prisma.productsOnPurchase.findMany({ select: { productID: true } })
     * 
     */
    findMany<T extends ProductsOnPurchaseFindManyArgs>(args?: SelectSubset<T, ProductsOnPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductsOnPurchase.
     * @param {ProductsOnPurchaseCreateArgs} args - Arguments to create a ProductsOnPurchase.
     * @example
     * // Create one ProductsOnPurchase
     * const ProductsOnPurchase = await prisma.productsOnPurchase.create({
     *   data: {
     *     // ... data to create a ProductsOnPurchase
     *   }
     * })
     * 
     */
    create<T extends ProductsOnPurchaseCreateArgs>(args: SelectSubset<T, ProductsOnPurchaseCreateArgs<ExtArgs>>): Prisma__ProductsOnPurchaseClient<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductsOnPurchases.
     * @param {ProductsOnPurchaseCreateManyArgs} args - Arguments to create many ProductsOnPurchases.
     * @example
     * // Create many ProductsOnPurchases
     * const productsOnPurchase = await prisma.productsOnPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsOnPurchaseCreateManyArgs>(args?: SelectSubset<T, ProductsOnPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductsOnPurchases and returns the data saved in the database.
     * @param {ProductsOnPurchaseCreateManyAndReturnArgs} args - Arguments to create many ProductsOnPurchases.
     * @example
     * // Create many ProductsOnPurchases
     * const productsOnPurchase = await prisma.productsOnPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductsOnPurchases and only return the `productID`
     * const productsOnPurchaseWithProductIDOnly = await prisma.productsOnPurchase.createManyAndReturn({
     *   select: { productID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsOnPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsOnPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductsOnPurchase.
     * @param {ProductsOnPurchaseDeleteArgs} args - Arguments to delete one ProductsOnPurchase.
     * @example
     * // Delete one ProductsOnPurchase
     * const ProductsOnPurchase = await prisma.productsOnPurchase.delete({
     *   where: {
     *     // ... filter to delete one ProductsOnPurchase
     *   }
     * })
     * 
     */
    delete<T extends ProductsOnPurchaseDeleteArgs>(args: SelectSubset<T, ProductsOnPurchaseDeleteArgs<ExtArgs>>): Prisma__ProductsOnPurchaseClient<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductsOnPurchase.
     * @param {ProductsOnPurchaseUpdateArgs} args - Arguments to update one ProductsOnPurchase.
     * @example
     * // Update one ProductsOnPurchase
     * const productsOnPurchase = await prisma.productsOnPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsOnPurchaseUpdateArgs>(args: SelectSubset<T, ProductsOnPurchaseUpdateArgs<ExtArgs>>): Prisma__ProductsOnPurchaseClient<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductsOnPurchases.
     * @param {ProductsOnPurchaseDeleteManyArgs} args - Arguments to filter ProductsOnPurchases to delete.
     * @example
     * // Delete a few ProductsOnPurchases
     * const { count } = await prisma.productsOnPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsOnPurchaseDeleteManyArgs>(args?: SelectSubset<T, ProductsOnPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsOnPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsOnPurchases
     * const productsOnPurchase = await prisma.productsOnPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsOnPurchaseUpdateManyArgs>(args: SelectSubset<T, ProductsOnPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsOnPurchases and returns the data updated in the database.
     * @param {ProductsOnPurchaseUpdateManyAndReturnArgs} args - Arguments to update many ProductsOnPurchases.
     * @example
     * // Update many ProductsOnPurchases
     * const productsOnPurchase = await prisma.productsOnPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductsOnPurchases and only return the `productID`
     * const productsOnPurchaseWithProductIDOnly = await prisma.productsOnPurchase.updateManyAndReturn({
     *   select: { productID: true },
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
    updateManyAndReturn<T extends ProductsOnPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsOnPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductsOnPurchase.
     * @param {ProductsOnPurchaseUpsertArgs} args - Arguments to update or create a ProductsOnPurchase.
     * @example
     * // Update or create a ProductsOnPurchase
     * const productsOnPurchase = await prisma.productsOnPurchase.upsert({
     *   create: {
     *     // ... data to create a ProductsOnPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsOnPurchase we want to update
     *   }
     * })
     */
    upsert<T extends ProductsOnPurchaseUpsertArgs>(args: SelectSubset<T, ProductsOnPurchaseUpsertArgs<ExtArgs>>): Prisma__ProductsOnPurchaseClient<$Result.GetResult<Prisma.$ProductsOnPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductsOnPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnPurchaseCountArgs} args - Arguments to filter ProductsOnPurchases to count.
     * @example
     * // Count the number of ProductsOnPurchases
     * const count = await prisma.productsOnPurchase.count({
     *   where: {
     *     // ... the filter for the ProductsOnPurchases we want to count
     *   }
     * })
    **/
    count<T extends ProductsOnPurchaseCountArgs>(
      args?: Subset<T, ProductsOnPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsOnPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsOnPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsOnPurchaseAggregateArgs>(args: Subset<T, ProductsOnPurchaseAggregateArgs>): Prisma.PrismaPromise<GetProductsOnPurchaseAggregateType<T>>

    /**
     * Group by ProductsOnPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnPurchaseGroupByArgs} args - Group by arguments.
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
      T extends ProductsOnPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsOnPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: ProductsOnPurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsOnPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsOnPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductsOnPurchase model
   */
  readonly fields: ProductsOnPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductsOnPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsOnPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductsOnPurchase model
   */
  interface ProductsOnPurchaseFieldRefs {
    readonly productID: FieldRef<"ProductsOnPurchase", 'String'>
    readonly purchaseID: FieldRef<"ProductsOnPurchase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductsOnPurchase findUnique
   */
  export type ProductsOnPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnPurchase to fetch.
     */
    where: ProductsOnPurchaseWhereUniqueInput
  }

  /**
   * ProductsOnPurchase findUniqueOrThrow
   */
  export type ProductsOnPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnPurchase to fetch.
     */
    where: ProductsOnPurchaseWhereUniqueInput
  }

  /**
   * ProductsOnPurchase findFirst
   */
  export type ProductsOnPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnPurchase to fetch.
     */
    where?: ProductsOnPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnPurchases to fetch.
     */
    orderBy?: ProductsOnPurchaseOrderByWithRelationInput | ProductsOnPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOnPurchases.
     */
    cursor?: ProductsOnPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOnPurchases.
     */
    distinct?: ProductsOnPurchaseScalarFieldEnum | ProductsOnPurchaseScalarFieldEnum[]
  }

  /**
   * ProductsOnPurchase findFirstOrThrow
   */
  export type ProductsOnPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnPurchase to fetch.
     */
    where?: ProductsOnPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnPurchases to fetch.
     */
    orderBy?: ProductsOnPurchaseOrderByWithRelationInput | ProductsOnPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOnPurchases.
     */
    cursor?: ProductsOnPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOnPurchases.
     */
    distinct?: ProductsOnPurchaseScalarFieldEnum | ProductsOnPurchaseScalarFieldEnum[]
  }

  /**
   * ProductsOnPurchase findMany
   */
  export type ProductsOnPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnPurchases to fetch.
     */
    where?: ProductsOnPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnPurchases to fetch.
     */
    orderBy?: ProductsOnPurchaseOrderByWithRelationInput | ProductsOnPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductsOnPurchases.
     */
    cursor?: ProductsOnPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnPurchases.
     */
    skip?: number
    distinct?: ProductsOnPurchaseScalarFieldEnum | ProductsOnPurchaseScalarFieldEnum[]
  }

  /**
   * ProductsOnPurchase create
   */
  export type ProductsOnPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductsOnPurchase.
     */
    data: XOR<ProductsOnPurchaseCreateInput, ProductsOnPurchaseUncheckedCreateInput>
  }

  /**
   * ProductsOnPurchase createMany
   */
  export type ProductsOnPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductsOnPurchases.
     */
    data: ProductsOnPurchaseCreateManyInput | ProductsOnPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductsOnPurchase createManyAndReturn
   */
  export type ProductsOnPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many ProductsOnPurchases.
     */
    data: ProductsOnPurchaseCreateManyInput | ProductsOnPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductsOnPurchase update
   */
  export type ProductsOnPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductsOnPurchase.
     */
    data: XOR<ProductsOnPurchaseUpdateInput, ProductsOnPurchaseUncheckedUpdateInput>
    /**
     * Choose, which ProductsOnPurchase to update.
     */
    where: ProductsOnPurchaseWhereUniqueInput
  }

  /**
   * ProductsOnPurchase updateMany
   */
  export type ProductsOnPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductsOnPurchases.
     */
    data: XOR<ProductsOnPurchaseUpdateManyMutationInput, ProductsOnPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which ProductsOnPurchases to update
     */
    where?: ProductsOnPurchaseWhereInput
    /**
     * Limit how many ProductsOnPurchases to update.
     */
    limit?: number
  }

  /**
   * ProductsOnPurchase updateManyAndReturn
   */
  export type ProductsOnPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update ProductsOnPurchases.
     */
    data: XOR<ProductsOnPurchaseUpdateManyMutationInput, ProductsOnPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which ProductsOnPurchases to update
     */
    where?: ProductsOnPurchaseWhereInput
    /**
     * Limit how many ProductsOnPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductsOnPurchase upsert
   */
  export type ProductsOnPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductsOnPurchase to update in case it exists.
     */
    where: ProductsOnPurchaseWhereUniqueInput
    /**
     * In case the ProductsOnPurchase found by the `where` argument doesn't exist, create a new ProductsOnPurchase with this data.
     */
    create: XOR<ProductsOnPurchaseCreateInput, ProductsOnPurchaseUncheckedCreateInput>
    /**
     * In case the ProductsOnPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsOnPurchaseUpdateInput, ProductsOnPurchaseUncheckedUpdateInput>
  }

  /**
   * ProductsOnPurchase delete
   */
  export type ProductsOnPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
    /**
     * Filter which ProductsOnPurchase to delete.
     */
    where: ProductsOnPurchaseWhereUniqueInput
  }

  /**
   * ProductsOnPurchase deleteMany
   */
  export type ProductsOnPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsOnPurchases to delete
     */
    where?: ProductsOnPurchaseWhereInput
    /**
     * Limit how many ProductsOnPurchases to delete.
     */
    limit?: number
  }

  /**
   * ProductsOnPurchase without action
   */
  export type ProductsOnPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnPurchase
     */
    select?: ProductsOnPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnPurchase
     */
    omit?: ProductsOnPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnPurchaseInclude<ExtArgs> | null
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


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    address: 'address',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    species: 'species',
    race: 'race',
    dateOfBirth: 'dateOfBirth',
    weight: 'weight',
    customerID: 'customerID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SchedulingScalarFieldEnum: {
    id: 'id',
    petID: 'petID',
    serviceID: 'serviceID',
    date: 'date',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchedulingScalarFieldEnum = (typeof SchedulingScalarFieldEnum)[keyof typeof SchedulingScalarFieldEnum]


  export const WorkerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    email: 'email',
    salary: 'salary',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkerScalarFieldEnum = (typeof WorkerScalarFieldEnum)[keyof typeof WorkerScalarFieldEnum]


  export const WorkersOnSchedulingsScalarFieldEnum: {
    workerID: 'workerID',
    schedulingID: 'schedulingID'
  };

  export type WorkersOnSchedulingsScalarFieldEnum = (typeof WorkersOnSchedulingsScalarFieldEnum)[keyof typeof WorkersOnSchedulingsScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    customerID: 'customerID',
    workerID: 'workerID',
    total: 'total',
    createdAt: 'createdAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const ProductsOnPurchaseScalarFieldEnum: {
    productID: 'productID',
    purchaseID: 'purchaseID'
  };

  export type ProductsOnPurchaseScalarFieldEnum = (typeof ProductsOnPurchaseScalarFieldEnum)[keyof typeof ProductsOnPurchaseScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    password?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    purchases?: PurchaseListRelationFilter
    pets?: PetListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
    pets?: PetOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    password?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    purchases?: PurchaseListRelationFilter
    pets?: PetListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringWithAggregatesFilter<"Customer"> | string
    password?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    race?: StringFilter<"Pet"> | string
    dateOfBirth?: DateTimeFilter<"Pet"> | Date | string
    weight?: FloatFilter<"Pet"> | number
    customerID?: StringFilter<"Pet"> | string
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    scheduling?: SchedulingListRelationFilter
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    race?: SortOrder
    dateOfBirth?: SortOrder
    weight?: SortOrder
    customerID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    scheduling?: SchedulingOrderByRelationAggregateInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    race?: StringFilter<"Pet"> | string
    dateOfBirth?: DateTimeFilter<"Pet"> | Date | string
    weight?: FloatFilter<"Pet"> | number
    customerID?: StringFilter<"Pet"> | string
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    scheduling?: SchedulingListRelationFilter
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    race?: SortOrder
    dateOfBirth?: SortOrder
    weight?: SortOrder
    customerID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pet"> | string
    name?: StringWithAggregatesFilter<"Pet"> | string
    species?: StringWithAggregatesFilter<"Pet"> | string
    race?: StringWithAggregatesFilter<"Pet"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    weight?: FloatWithAggregatesFilter<"Pet"> | number
    customerID?: StringWithAggregatesFilter<"Pet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    scheduling?: SchedulingListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    scheduling?: SchedulingOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    scheduling?: SchedulingListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    price?: FloatWithAggregatesFilter<"Service"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type SchedulingWhereInput = {
    AND?: SchedulingWhereInput | SchedulingWhereInput[]
    OR?: SchedulingWhereInput[]
    NOT?: SchedulingWhereInput | SchedulingWhereInput[]
    id?: StringFilter<"Scheduling"> | string
    petID?: StringFilter<"Scheduling"> | string
    serviceID?: StringFilter<"Scheduling"> | string
    date?: DateTimeFilter<"Scheduling"> | Date | string
    status?: EnumStatusFilter<"Scheduling"> | $Enums.Status
    createdAt?: DateTimeFilter<"Scheduling"> | Date | string
    updatedAt?: DateTimeFilter<"Scheduling"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    workers?: WorkersOnSchedulingsListRelationFilter
  }

  export type SchedulingOrderByWithRelationInput = {
    id?: SortOrder
    petID?: SortOrder
    serviceID?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pet?: PetOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    workers?: WorkersOnSchedulingsOrderByRelationAggregateInput
  }

  export type SchedulingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchedulingWhereInput | SchedulingWhereInput[]
    OR?: SchedulingWhereInput[]
    NOT?: SchedulingWhereInput | SchedulingWhereInput[]
    petID?: StringFilter<"Scheduling"> | string
    serviceID?: StringFilter<"Scheduling"> | string
    date?: DateTimeFilter<"Scheduling"> | Date | string
    status?: EnumStatusFilter<"Scheduling"> | $Enums.Status
    createdAt?: DateTimeFilter<"Scheduling"> | Date | string
    updatedAt?: DateTimeFilter<"Scheduling"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    workers?: WorkersOnSchedulingsListRelationFilter
  }, "id">

  export type SchedulingOrderByWithAggregationInput = {
    id?: SortOrder
    petID?: SortOrder
    serviceID?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchedulingCountOrderByAggregateInput
    _max?: SchedulingMaxOrderByAggregateInput
    _min?: SchedulingMinOrderByAggregateInput
  }

  export type SchedulingScalarWhereWithAggregatesInput = {
    AND?: SchedulingScalarWhereWithAggregatesInput | SchedulingScalarWhereWithAggregatesInput[]
    OR?: SchedulingScalarWhereWithAggregatesInput[]
    NOT?: SchedulingScalarWhereWithAggregatesInput | SchedulingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scheduling"> | string
    petID?: StringWithAggregatesFilter<"Scheduling"> | string
    serviceID?: StringWithAggregatesFilter<"Scheduling"> | string
    date?: DateTimeWithAggregatesFilter<"Scheduling"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Scheduling"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Scheduling"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Scheduling"> | Date | string
  }

  export type WorkerWhereInput = {
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    id?: StringFilter<"Worker"> | string
    name?: StringFilter<"Worker"> | string
    role?: EnumRoleFilter<"Worker"> | $Enums.Role
    email?: StringFilter<"Worker"> | string
    salary?: FloatFilter<"Worker"> | number
    password?: StringFilter<"Worker"> | string
    createdAt?: DateTimeFilter<"Worker"> | Date | string
    updatedAt?: DateTimeFilter<"Worker"> | Date | string
    schedulings?: WorkersOnSchedulingsListRelationFilter
    sales?: PurchaseListRelationFilter
  }

  export type WorkerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    salary?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedulings?: WorkersOnSchedulingsOrderByRelationAggregateInput
    sales?: PurchaseOrderByRelationAggregateInput
  }

  export type WorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    name?: StringFilter<"Worker"> | string
    role?: EnumRoleFilter<"Worker"> | $Enums.Role
    salary?: FloatFilter<"Worker"> | number
    password?: StringFilter<"Worker"> | string
    createdAt?: DateTimeFilter<"Worker"> | Date | string
    updatedAt?: DateTimeFilter<"Worker"> | Date | string
    schedulings?: WorkersOnSchedulingsListRelationFilter
    sales?: PurchaseListRelationFilter
  }, "id" | "email">

  export type WorkerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    salary?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkerCountOrderByAggregateInput
    _avg?: WorkerAvgOrderByAggregateInput
    _max?: WorkerMaxOrderByAggregateInput
    _min?: WorkerMinOrderByAggregateInput
    _sum?: WorkerSumOrderByAggregateInput
  }

  export type WorkerScalarWhereWithAggregatesInput = {
    AND?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    OR?: WorkerScalarWhereWithAggregatesInput[]
    NOT?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Worker"> | string
    name?: StringWithAggregatesFilter<"Worker"> | string
    role?: EnumRoleWithAggregatesFilter<"Worker"> | $Enums.Role
    email?: StringWithAggregatesFilter<"Worker"> | string
    salary?: FloatWithAggregatesFilter<"Worker"> | number
    password?: StringWithAggregatesFilter<"Worker"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Worker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Worker"> | Date | string
  }

  export type WorkersOnSchedulingsWhereInput = {
    AND?: WorkersOnSchedulingsWhereInput | WorkersOnSchedulingsWhereInput[]
    OR?: WorkersOnSchedulingsWhereInput[]
    NOT?: WorkersOnSchedulingsWhereInput | WorkersOnSchedulingsWhereInput[]
    workerID?: StringFilter<"WorkersOnSchedulings"> | string
    schedulingID?: StringFilter<"WorkersOnSchedulings"> | string
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
    scheduling?: XOR<SchedulingScalarRelationFilter, SchedulingWhereInput>
  }

  export type WorkersOnSchedulingsOrderByWithRelationInput = {
    workerID?: SortOrder
    schedulingID?: SortOrder
    worker?: WorkerOrderByWithRelationInput
    scheduling?: SchedulingOrderByWithRelationInput
  }

  export type WorkersOnSchedulingsWhereUniqueInput = Prisma.AtLeast<{
    workerID_schedulingID?: WorkersOnSchedulingsWorkerIDSchedulingIDCompoundUniqueInput
    AND?: WorkersOnSchedulingsWhereInput | WorkersOnSchedulingsWhereInput[]
    OR?: WorkersOnSchedulingsWhereInput[]
    NOT?: WorkersOnSchedulingsWhereInput | WorkersOnSchedulingsWhereInput[]
    workerID?: StringFilter<"WorkersOnSchedulings"> | string
    schedulingID?: StringFilter<"WorkersOnSchedulings"> | string
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
    scheduling?: XOR<SchedulingScalarRelationFilter, SchedulingWhereInput>
  }, "workerID_schedulingID">

  export type WorkersOnSchedulingsOrderByWithAggregationInput = {
    workerID?: SortOrder
    schedulingID?: SortOrder
    _count?: WorkersOnSchedulingsCountOrderByAggregateInput
    _max?: WorkersOnSchedulingsMaxOrderByAggregateInput
    _min?: WorkersOnSchedulingsMinOrderByAggregateInput
  }

  export type WorkersOnSchedulingsScalarWhereWithAggregatesInput = {
    AND?: WorkersOnSchedulingsScalarWhereWithAggregatesInput | WorkersOnSchedulingsScalarWhereWithAggregatesInput[]
    OR?: WorkersOnSchedulingsScalarWhereWithAggregatesInput[]
    NOT?: WorkersOnSchedulingsScalarWhereWithAggregatesInput | WorkersOnSchedulingsScalarWhereWithAggregatesInput[]
    workerID?: StringWithAggregatesFilter<"WorkersOnSchedulings"> | string
    schedulingID?: StringWithAggregatesFilter<"WorkersOnSchedulings"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    purchases?: ProductsOnPurchaseListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchases?: ProductsOnPurchaseOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    purchases?: ProductsOnPurchaseListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    quantity?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    customerID?: StringFilter<"Purchase"> | string
    workerID?: StringFilter<"Purchase"> | string
    total?: FloatFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    products?: ProductsOnPurchaseListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    customerID?: SortOrder
    workerID?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    products?: ProductsOnPurchaseOrderByRelationAggregateInput
    customer?: CustomerOrderByWithRelationInput
    worker?: WorkerOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    customerID?: StringFilter<"Purchase"> | string
    workerID?: StringFilter<"Purchase"> | string
    total?: FloatFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    products?: ProductsOnPurchaseListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
  }, "id">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    customerID?: SortOrder
    workerID?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    customerID?: StringWithAggregatesFilter<"Purchase"> | string
    workerID?: StringWithAggregatesFilter<"Purchase"> | string
    total?: FloatWithAggregatesFilter<"Purchase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type ProductsOnPurchaseWhereInput = {
    AND?: ProductsOnPurchaseWhereInput | ProductsOnPurchaseWhereInput[]
    OR?: ProductsOnPurchaseWhereInput[]
    NOT?: ProductsOnPurchaseWhereInput | ProductsOnPurchaseWhereInput[]
    productID?: StringFilter<"ProductsOnPurchase"> | string
    purchaseID?: StringFilter<"ProductsOnPurchase"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
  }

  export type ProductsOnPurchaseOrderByWithRelationInput = {
    productID?: SortOrder
    purchaseID?: SortOrder
    product?: ProductOrderByWithRelationInput
    purchase?: PurchaseOrderByWithRelationInput
  }

  export type ProductsOnPurchaseWhereUniqueInput = Prisma.AtLeast<{
    productID_purchaseID?: ProductsOnPurchaseProductIDPurchaseIDCompoundUniqueInput
    AND?: ProductsOnPurchaseWhereInput | ProductsOnPurchaseWhereInput[]
    OR?: ProductsOnPurchaseWhereInput[]
    NOT?: ProductsOnPurchaseWhereInput | ProductsOnPurchaseWhereInput[]
    productID?: StringFilter<"ProductsOnPurchase"> | string
    purchaseID?: StringFilter<"ProductsOnPurchase"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
  }, "productID_purchaseID">

  export type ProductsOnPurchaseOrderByWithAggregationInput = {
    productID?: SortOrder
    purchaseID?: SortOrder
    _count?: ProductsOnPurchaseCountOrderByAggregateInput
    _max?: ProductsOnPurchaseMaxOrderByAggregateInput
    _min?: ProductsOnPurchaseMinOrderByAggregateInput
  }

  export type ProductsOnPurchaseScalarWhereWithAggregatesInput = {
    AND?: ProductsOnPurchaseScalarWhereWithAggregatesInput | ProductsOnPurchaseScalarWhereWithAggregatesInput[]
    OR?: ProductsOnPurchaseScalarWhereWithAggregatesInput[]
    NOT?: ProductsOnPurchaseScalarWhereWithAggregatesInput | ProductsOnPurchaseScalarWhereWithAggregatesInput[]
    productID?: StringWithAggregatesFilter<"ProductsOnPurchase"> | string
    purchaseID?: StringWithAggregatesFilter<"ProductsOnPurchase"> | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    email: string
    address: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutCustomerInput
    pets?: PetCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    address: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCustomerInput
    pets?: PetUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutCustomerNestedInput
    pets?: PetUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutCustomerNestedInput
    pets?: PetUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    email: string
    address: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateInput = {
    id?: string
    name: string
    species: string
    race: string
    dateOfBirth: Date | string
    weight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPetsInput
    scheduling?: SchedulingCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateInput = {
    id?: string
    name: string
    species: string
    race: string
    dateOfBirth: Date | string
    weight: number
    customerID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduling?: SchedulingUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPetsNestedInput
    scheduling?: SchedulingUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    customerID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduling?: SchedulingUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: string
    name: string
    species: string
    race: string
    dateOfBirth: Date | string
    weight: number
    customerID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    customerID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduling?: SchedulingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduling?: SchedulingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduling?: SchedulingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduling?: SchedulingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingCreateInput = {
    id?: string
    date: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    pet: PetCreateNestedOneWithoutSchedulingInput
    service: ServiceCreateNestedOneWithoutSchedulingInput
    workers?: WorkersOnSchedulingsCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateInput = {
    id?: string
    petID: string
    serviceID: string
    date: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorkersOnSchedulingsUncheckedCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutSchedulingNestedInput
    service?: ServiceUpdateOneRequiredWithoutSchedulingNestedInput
    workers?: WorkersOnSchedulingsUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    petID?: StringFieldUpdateOperationsInput | string
    serviceID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorkersOnSchedulingsUncheckedUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingCreateManyInput = {
    id?: string
    petID: string
    serviceID: string
    date: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    petID?: StringFieldUpdateOperationsInput | string
    serviceID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerCreateInput = {
    id?: string
    name: string
    role: $Enums.Role
    email: string
    salary: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedulings?: WorkersOnSchedulingsCreateNestedManyWithoutWorkerInput
    sales?: PurchaseCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateInput = {
    id?: string
    name: string
    role: $Enums.Role
    email: string
    salary: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedulings?: WorkersOnSchedulingsUncheckedCreateNestedManyWithoutWorkerInput
    sales?: PurchaseUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedulings?: WorkersOnSchedulingsUpdateManyWithoutWorkerNestedInput
    sales?: PurchaseUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedulings?: WorkersOnSchedulingsUncheckedUpdateManyWithoutWorkerNestedInput
    sales?: PurchaseUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerCreateManyInput = {
    id?: string
    name: string
    role: $Enums.Role
    email: string
    salary: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkersOnSchedulingsCreateInput = {
    worker: WorkerCreateNestedOneWithoutSchedulingsInput
    scheduling: SchedulingCreateNestedOneWithoutWorkersInput
  }

  export type WorkersOnSchedulingsUncheckedCreateInput = {
    workerID: string
    schedulingID: string
  }

  export type WorkersOnSchedulingsUpdateInput = {
    worker?: WorkerUpdateOneRequiredWithoutSchedulingsNestedInput
    scheduling?: SchedulingUpdateOneRequiredWithoutWorkersNestedInput
  }

  export type WorkersOnSchedulingsUncheckedUpdateInput = {
    workerID?: StringFieldUpdateOperationsInput | string
    schedulingID?: StringFieldUpdateOperationsInput | string
  }

  export type WorkersOnSchedulingsCreateManyInput = {
    workerID: string
    schedulingID: string
  }

  export type WorkersOnSchedulingsUpdateManyMutationInput = {

  }

  export type WorkersOnSchedulingsUncheckedUpdateManyInput = {
    workerID?: StringFieldUpdateOperationsInput | string
    schedulingID?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: ProductsOnPurchaseCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: ProductsOnPurchaseUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: ProductsOnPurchaseUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: ProductsOnPurchaseUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    id?: string
    total: number
    createdAt?: Date | string
    products?: ProductsOnPurchaseCreateNestedManyWithoutPurchaseInput
    customer: CustomerCreateNestedOneWithoutPurchasesInput
    worker: WorkerCreateNestedOneWithoutSalesInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    customerID: string
    workerID: string
    total: number
    createdAt?: Date | string
    products?: ProductsOnPurchaseUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsOnPurchaseUpdateManyWithoutPurchaseNestedInput
    customer?: CustomerUpdateOneRequiredWithoutPurchasesNestedInput
    worker?: WorkerUpdateOneRequiredWithoutSalesNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    workerID?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsOnPurchaseUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    id?: string
    customerID: string
    workerID: string
    total: number
    createdAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    workerID?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOnPurchaseCreateInput = {
    product: ProductCreateNestedOneWithoutPurchasesInput
    purchase: PurchaseCreateNestedOneWithoutProductsInput
  }

  export type ProductsOnPurchaseUncheckedCreateInput = {
    productID: string
    purchaseID: string
  }

  export type ProductsOnPurchaseUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutPurchasesNestedInput
    purchase?: PurchaseUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductsOnPurchaseUncheckedUpdateInput = {
    productID?: StringFieldUpdateOperationsInput | string
    purchaseID?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsOnPurchaseCreateManyInput = {
    productID: string
    purchaseID: string
  }

  export type ProductsOnPurchaseUpdateManyMutationInput = {

  }

  export type ProductsOnPurchaseUncheckedUpdateManyInput = {
    productID?: StringFieldUpdateOperationsInput | string
    purchaseID?: StringFieldUpdateOperationsInput | string
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

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type SchedulingListRelationFilter = {
    every?: SchedulingWhereInput
    some?: SchedulingWhereInput
    none?: SchedulingWhereInput
  }

  export type SchedulingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    race?: SortOrder
    dateOfBirth?: SortOrder
    weight?: SortOrder
    customerID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    race?: SortOrder
    dateOfBirth?: SortOrder
    weight?: SortOrder
    customerID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    race?: SortOrder
    dateOfBirth?: SortOrder
    weight?: SortOrder
    customerID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type PetScalarRelationFilter = {
    is?: PetWhereInput
    isNot?: PetWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type WorkersOnSchedulingsListRelationFilter = {
    every?: WorkersOnSchedulingsWhereInput
    some?: WorkersOnSchedulingsWhereInput
    none?: WorkersOnSchedulingsWhereInput
  }

  export type WorkersOnSchedulingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchedulingCountOrderByAggregateInput = {
    id?: SortOrder
    petID?: SortOrder
    serviceID?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchedulingMaxOrderByAggregateInput = {
    id?: SortOrder
    petID?: SortOrder
    serviceID?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchedulingMinOrderByAggregateInput = {
    id?: SortOrder
    petID?: SortOrder
    serviceID?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type WorkerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    salary?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type WorkerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    salary?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    salary?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type WorkerScalarRelationFilter = {
    is?: WorkerWhereInput
    isNot?: WorkerWhereInput
  }

  export type SchedulingScalarRelationFilter = {
    is?: SchedulingWhereInput
    isNot?: SchedulingWhereInput
  }

  export type WorkersOnSchedulingsWorkerIDSchedulingIDCompoundUniqueInput = {
    workerID: string
    schedulingID: string
  }

  export type WorkersOnSchedulingsCountOrderByAggregateInput = {
    workerID?: SortOrder
    schedulingID?: SortOrder
  }

  export type WorkersOnSchedulingsMaxOrderByAggregateInput = {
    workerID?: SortOrder
    schedulingID?: SortOrder
  }

  export type WorkersOnSchedulingsMinOrderByAggregateInput = {
    workerID?: SortOrder
    schedulingID?: SortOrder
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

  export type ProductsOnPurchaseListRelationFilter = {
    every?: ProductsOnPurchaseWhereInput
    some?: ProductsOnPurchaseWhereInput
    none?: ProductsOnPurchaseWhereInput
  }

  export type ProductsOnPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
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

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    customerID?: SortOrder
    workerID?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    customerID?: SortOrder
    workerID?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    customerID?: SortOrder
    workerID?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type PurchaseScalarRelationFilter = {
    is?: PurchaseWhereInput
    isNot?: PurchaseWhereInput
  }

  export type ProductsOnPurchaseProductIDPurchaseIDCompoundUniqueInput = {
    productID: string
    purchaseID: string
  }

  export type ProductsOnPurchaseCountOrderByAggregateInput = {
    productID?: SortOrder
    purchaseID?: SortOrder
  }

  export type ProductsOnPurchaseMaxOrderByAggregateInput = {
    productID?: SortOrder
    purchaseID?: SortOrder
  }

  export type ProductsOnPurchaseMinOrderByAggregateInput = {
    productID?: SortOrder
    purchaseID?: SortOrder
  }

  export type PurchaseCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput> | PurchaseCreateWithoutCustomerInput[] | PurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCustomerInput | PurchaseCreateOrConnectWithoutCustomerInput[]
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PetCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PetCreateWithoutCustomerInput, PetUncheckedCreateWithoutCustomerInput> | PetCreateWithoutCustomerInput[] | PetUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutCustomerInput | PetCreateOrConnectWithoutCustomerInput[]
    createMany?: PetCreateManyCustomerInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput> | PurchaseCreateWithoutCustomerInput[] | PurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCustomerInput | PurchaseCreateOrConnectWithoutCustomerInput[]
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PetCreateWithoutCustomerInput, PetUncheckedCreateWithoutCustomerInput> | PetCreateWithoutCustomerInput[] | PetUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutCustomerInput | PetCreateOrConnectWithoutCustomerInput[]
    createMany?: PetCreateManyCustomerInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PurchaseUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput> | PurchaseCreateWithoutCustomerInput[] | PurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCustomerInput | PurchaseCreateOrConnectWithoutCustomerInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCustomerInput | PurchaseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCustomerInput | PurchaseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCustomerInput | PurchaseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PetUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PetCreateWithoutCustomerInput, PetUncheckedCreateWithoutCustomerInput> | PetCreateWithoutCustomerInput[] | PetUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutCustomerInput | PetCreateOrConnectWithoutCustomerInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutCustomerInput | PetUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PetCreateManyCustomerInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutCustomerInput | PetUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PetUpdateManyWithWhereWithoutCustomerInput | PetUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput> | PurchaseCreateWithoutCustomerInput[] | PurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCustomerInput | PurchaseCreateOrConnectWithoutCustomerInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCustomerInput | PurchaseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCustomerInput | PurchaseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCustomerInput | PurchaseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PetCreateWithoutCustomerInput, PetUncheckedCreateWithoutCustomerInput> | PetCreateWithoutCustomerInput[] | PetUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutCustomerInput | PetCreateOrConnectWithoutCustomerInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutCustomerInput | PetUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PetCreateManyCustomerInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutCustomerInput | PetUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PetUpdateManyWithWhereWithoutCustomerInput | PetUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutPetsInput = {
    create?: XOR<CustomerCreateWithoutPetsInput, CustomerUncheckedCreateWithoutPetsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPetsInput
    connect?: CustomerWhereUniqueInput
  }

  export type SchedulingCreateNestedManyWithoutPetInput = {
    create?: XOR<SchedulingCreateWithoutPetInput, SchedulingUncheckedCreateWithoutPetInput> | SchedulingCreateWithoutPetInput[] | SchedulingUncheckedCreateWithoutPetInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutPetInput | SchedulingCreateOrConnectWithoutPetInput[]
    createMany?: SchedulingCreateManyPetInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type SchedulingUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<SchedulingCreateWithoutPetInput, SchedulingUncheckedCreateWithoutPetInput> | SchedulingCreateWithoutPetInput[] | SchedulingUncheckedCreateWithoutPetInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutPetInput | SchedulingCreateOrConnectWithoutPetInput[]
    createMany?: SchedulingCreateManyPetInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<CustomerCreateWithoutPetsInput, CustomerUncheckedCreateWithoutPetsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPetsInput
    upsert?: CustomerUpsertWithoutPetsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPetsInput, CustomerUpdateWithoutPetsInput>, CustomerUncheckedUpdateWithoutPetsInput>
  }

  export type SchedulingUpdateManyWithoutPetNestedInput = {
    create?: XOR<SchedulingCreateWithoutPetInput, SchedulingUncheckedCreateWithoutPetInput> | SchedulingCreateWithoutPetInput[] | SchedulingUncheckedCreateWithoutPetInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutPetInput | SchedulingCreateOrConnectWithoutPetInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutPetInput | SchedulingUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: SchedulingCreateManyPetInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutPetInput | SchedulingUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutPetInput | SchedulingUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type SchedulingUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<SchedulingCreateWithoutPetInput, SchedulingUncheckedCreateWithoutPetInput> | SchedulingCreateWithoutPetInput[] | SchedulingUncheckedCreateWithoutPetInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutPetInput | SchedulingCreateOrConnectWithoutPetInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutPetInput | SchedulingUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: SchedulingCreateManyPetInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutPetInput | SchedulingUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutPetInput | SchedulingUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type SchedulingCreateNestedManyWithoutServiceInput = {
    create?: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput> | SchedulingCreateWithoutServiceInput[] | SchedulingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutServiceInput | SchedulingCreateOrConnectWithoutServiceInput[]
    createMany?: SchedulingCreateManyServiceInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type SchedulingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput> | SchedulingCreateWithoutServiceInput[] | SchedulingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutServiceInput | SchedulingCreateOrConnectWithoutServiceInput[]
    createMany?: SchedulingCreateManyServiceInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type SchedulingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput> | SchedulingCreateWithoutServiceInput[] | SchedulingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutServiceInput | SchedulingCreateOrConnectWithoutServiceInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutServiceInput | SchedulingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: SchedulingCreateManyServiceInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutServiceInput | SchedulingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutServiceInput | SchedulingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type SchedulingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput> | SchedulingCreateWithoutServiceInput[] | SchedulingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutServiceInput | SchedulingCreateOrConnectWithoutServiceInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutServiceInput | SchedulingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: SchedulingCreateManyServiceInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutServiceInput | SchedulingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutServiceInput | SchedulingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type PetCreateNestedOneWithoutSchedulingInput = {
    create?: XOR<PetCreateWithoutSchedulingInput, PetUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: PetCreateOrConnectWithoutSchedulingInput
    connect?: PetWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutSchedulingInput = {
    create?: XOR<ServiceCreateWithoutSchedulingInput, ServiceUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutSchedulingInput
    connect?: ServiceWhereUniqueInput
  }

  export type WorkersOnSchedulingsCreateNestedManyWithoutSchedulingInput = {
    create?: XOR<WorkersOnSchedulingsCreateWithoutSchedulingInput, WorkersOnSchedulingsUncheckedCreateWithoutSchedulingInput> | WorkersOnSchedulingsCreateWithoutSchedulingInput[] | WorkersOnSchedulingsUncheckedCreateWithoutSchedulingInput[]
    connectOrCreate?: WorkersOnSchedulingsCreateOrConnectWithoutSchedulingInput | WorkersOnSchedulingsCreateOrConnectWithoutSchedulingInput[]
    createMany?: WorkersOnSchedulingsCreateManySchedulingInputEnvelope
    connect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
  }

  export type WorkersOnSchedulingsUncheckedCreateNestedManyWithoutSchedulingInput = {
    create?: XOR<WorkersOnSchedulingsCreateWithoutSchedulingInput, WorkersOnSchedulingsUncheckedCreateWithoutSchedulingInput> | WorkersOnSchedulingsCreateWithoutSchedulingInput[] | WorkersOnSchedulingsUncheckedCreateWithoutSchedulingInput[]
    connectOrCreate?: WorkersOnSchedulingsCreateOrConnectWithoutSchedulingInput | WorkersOnSchedulingsCreateOrConnectWithoutSchedulingInput[]
    createMany?: WorkersOnSchedulingsCreateManySchedulingInputEnvelope
    connect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type PetUpdateOneRequiredWithoutSchedulingNestedInput = {
    create?: XOR<PetCreateWithoutSchedulingInput, PetUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: PetCreateOrConnectWithoutSchedulingInput
    upsert?: PetUpsertWithoutSchedulingInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutSchedulingInput, PetUpdateWithoutSchedulingInput>, PetUncheckedUpdateWithoutSchedulingInput>
  }

  export type ServiceUpdateOneRequiredWithoutSchedulingNestedInput = {
    create?: XOR<ServiceCreateWithoutSchedulingInput, ServiceUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutSchedulingInput
    upsert?: ServiceUpsertWithoutSchedulingInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutSchedulingInput, ServiceUpdateWithoutSchedulingInput>, ServiceUncheckedUpdateWithoutSchedulingInput>
  }

  export type WorkersOnSchedulingsUpdateManyWithoutSchedulingNestedInput = {
    create?: XOR<WorkersOnSchedulingsCreateWithoutSchedulingInput, WorkersOnSchedulingsUncheckedCreateWithoutSchedulingInput> | WorkersOnSchedulingsCreateWithoutSchedulingInput[] | WorkersOnSchedulingsUncheckedCreateWithoutSchedulingInput[]
    connectOrCreate?: WorkersOnSchedulingsCreateOrConnectWithoutSchedulingInput | WorkersOnSchedulingsCreateOrConnectWithoutSchedulingInput[]
    upsert?: WorkersOnSchedulingsUpsertWithWhereUniqueWithoutSchedulingInput | WorkersOnSchedulingsUpsertWithWhereUniqueWithoutSchedulingInput[]
    createMany?: WorkersOnSchedulingsCreateManySchedulingInputEnvelope
    set?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    disconnect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    delete?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    connect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    update?: WorkersOnSchedulingsUpdateWithWhereUniqueWithoutSchedulingInput | WorkersOnSchedulingsUpdateWithWhereUniqueWithoutSchedulingInput[]
    updateMany?: WorkersOnSchedulingsUpdateManyWithWhereWithoutSchedulingInput | WorkersOnSchedulingsUpdateManyWithWhereWithoutSchedulingInput[]
    deleteMany?: WorkersOnSchedulingsScalarWhereInput | WorkersOnSchedulingsScalarWhereInput[]
  }

  export type WorkersOnSchedulingsUncheckedUpdateManyWithoutSchedulingNestedInput = {
    create?: XOR<WorkersOnSchedulingsCreateWithoutSchedulingInput, WorkersOnSchedulingsUncheckedCreateWithoutSchedulingInput> | WorkersOnSchedulingsCreateWithoutSchedulingInput[] | WorkersOnSchedulingsUncheckedCreateWithoutSchedulingInput[]
    connectOrCreate?: WorkersOnSchedulingsCreateOrConnectWithoutSchedulingInput | WorkersOnSchedulingsCreateOrConnectWithoutSchedulingInput[]
    upsert?: WorkersOnSchedulingsUpsertWithWhereUniqueWithoutSchedulingInput | WorkersOnSchedulingsUpsertWithWhereUniqueWithoutSchedulingInput[]
    createMany?: WorkersOnSchedulingsCreateManySchedulingInputEnvelope
    set?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    disconnect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    delete?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    connect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    update?: WorkersOnSchedulingsUpdateWithWhereUniqueWithoutSchedulingInput | WorkersOnSchedulingsUpdateWithWhereUniqueWithoutSchedulingInput[]
    updateMany?: WorkersOnSchedulingsUpdateManyWithWhereWithoutSchedulingInput | WorkersOnSchedulingsUpdateManyWithWhereWithoutSchedulingInput[]
    deleteMany?: WorkersOnSchedulingsScalarWhereInput | WorkersOnSchedulingsScalarWhereInput[]
  }

  export type WorkersOnSchedulingsCreateNestedManyWithoutWorkerInput = {
    create?: XOR<WorkersOnSchedulingsCreateWithoutWorkerInput, WorkersOnSchedulingsUncheckedCreateWithoutWorkerInput> | WorkersOnSchedulingsCreateWithoutWorkerInput[] | WorkersOnSchedulingsUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkersOnSchedulingsCreateOrConnectWithoutWorkerInput | WorkersOnSchedulingsCreateOrConnectWithoutWorkerInput[]
    createMany?: WorkersOnSchedulingsCreateManyWorkerInputEnvelope
    connect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutWorkerInput = {
    create?: XOR<PurchaseCreateWithoutWorkerInput, PurchaseUncheckedCreateWithoutWorkerInput> | PurchaseCreateWithoutWorkerInput[] | PurchaseUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutWorkerInput | PurchaseCreateOrConnectWithoutWorkerInput[]
    createMany?: PurchaseCreateManyWorkerInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type WorkersOnSchedulingsUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<WorkersOnSchedulingsCreateWithoutWorkerInput, WorkersOnSchedulingsUncheckedCreateWithoutWorkerInput> | WorkersOnSchedulingsCreateWithoutWorkerInput[] | WorkersOnSchedulingsUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkersOnSchedulingsCreateOrConnectWithoutWorkerInput | WorkersOnSchedulingsCreateOrConnectWithoutWorkerInput[]
    createMany?: WorkersOnSchedulingsCreateManyWorkerInputEnvelope
    connect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<PurchaseCreateWithoutWorkerInput, PurchaseUncheckedCreateWithoutWorkerInput> | PurchaseCreateWithoutWorkerInput[] | PurchaseUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutWorkerInput | PurchaseCreateOrConnectWithoutWorkerInput[]
    createMany?: PurchaseCreateManyWorkerInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type WorkersOnSchedulingsUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<WorkersOnSchedulingsCreateWithoutWorkerInput, WorkersOnSchedulingsUncheckedCreateWithoutWorkerInput> | WorkersOnSchedulingsCreateWithoutWorkerInput[] | WorkersOnSchedulingsUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkersOnSchedulingsCreateOrConnectWithoutWorkerInput | WorkersOnSchedulingsCreateOrConnectWithoutWorkerInput[]
    upsert?: WorkersOnSchedulingsUpsertWithWhereUniqueWithoutWorkerInput | WorkersOnSchedulingsUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: WorkersOnSchedulingsCreateManyWorkerInputEnvelope
    set?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    disconnect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    delete?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    connect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    update?: WorkersOnSchedulingsUpdateWithWhereUniqueWithoutWorkerInput | WorkersOnSchedulingsUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: WorkersOnSchedulingsUpdateManyWithWhereWithoutWorkerInput | WorkersOnSchedulingsUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: WorkersOnSchedulingsScalarWhereInput | WorkersOnSchedulingsScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<PurchaseCreateWithoutWorkerInput, PurchaseUncheckedCreateWithoutWorkerInput> | PurchaseCreateWithoutWorkerInput[] | PurchaseUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutWorkerInput | PurchaseCreateOrConnectWithoutWorkerInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutWorkerInput | PurchaseUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: PurchaseCreateManyWorkerInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutWorkerInput | PurchaseUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutWorkerInput | PurchaseUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type WorkersOnSchedulingsUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<WorkersOnSchedulingsCreateWithoutWorkerInput, WorkersOnSchedulingsUncheckedCreateWithoutWorkerInput> | WorkersOnSchedulingsCreateWithoutWorkerInput[] | WorkersOnSchedulingsUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkersOnSchedulingsCreateOrConnectWithoutWorkerInput | WorkersOnSchedulingsCreateOrConnectWithoutWorkerInput[]
    upsert?: WorkersOnSchedulingsUpsertWithWhereUniqueWithoutWorkerInput | WorkersOnSchedulingsUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: WorkersOnSchedulingsCreateManyWorkerInputEnvelope
    set?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    disconnect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    delete?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    connect?: WorkersOnSchedulingsWhereUniqueInput | WorkersOnSchedulingsWhereUniqueInput[]
    update?: WorkersOnSchedulingsUpdateWithWhereUniqueWithoutWorkerInput | WorkersOnSchedulingsUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: WorkersOnSchedulingsUpdateManyWithWhereWithoutWorkerInput | WorkersOnSchedulingsUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: WorkersOnSchedulingsScalarWhereInput | WorkersOnSchedulingsScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<PurchaseCreateWithoutWorkerInput, PurchaseUncheckedCreateWithoutWorkerInput> | PurchaseCreateWithoutWorkerInput[] | PurchaseUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutWorkerInput | PurchaseCreateOrConnectWithoutWorkerInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutWorkerInput | PurchaseUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: PurchaseCreateManyWorkerInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutWorkerInput | PurchaseUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutWorkerInput | PurchaseUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type WorkerCreateNestedOneWithoutSchedulingsInput = {
    create?: XOR<WorkerCreateWithoutSchedulingsInput, WorkerUncheckedCreateWithoutSchedulingsInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutSchedulingsInput
    connect?: WorkerWhereUniqueInput
  }

  export type SchedulingCreateNestedOneWithoutWorkersInput = {
    create?: XOR<SchedulingCreateWithoutWorkersInput, SchedulingUncheckedCreateWithoutWorkersInput>
    connectOrCreate?: SchedulingCreateOrConnectWithoutWorkersInput
    connect?: SchedulingWhereUniqueInput
  }

  export type WorkerUpdateOneRequiredWithoutSchedulingsNestedInput = {
    create?: XOR<WorkerCreateWithoutSchedulingsInput, WorkerUncheckedCreateWithoutSchedulingsInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutSchedulingsInput
    upsert?: WorkerUpsertWithoutSchedulingsInput
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutSchedulingsInput, WorkerUpdateWithoutSchedulingsInput>, WorkerUncheckedUpdateWithoutSchedulingsInput>
  }

  export type SchedulingUpdateOneRequiredWithoutWorkersNestedInput = {
    create?: XOR<SchedulingCreateWithoutWorkersInput, SchedulingUncheckedCreateWithoutWorkersInput>
    connectOrCreate?: SchedulingCreateOrConnectWithoutWorkersInput
    upsert?: SchedulingUpsertWithoutWorkersInput
    connect?: SchedulingWhereUniqueInput
    update?: XOR<XOR<SchedulingUpdateToOneWithWhereWithoutWorkersInput, SchedulingUpdateWithoutWorkersInput>, SchedulingUncheckedUpdateWithoutWorkersInput>
  }

  export type ProductsOnPurchaseCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductsOnPurchaseCreateWithoutProductInput, ProductsOnPurchaseUncheckedCreateWithoutProductInput> | ProductsOnPurchaseCreateWithoutProductInput[] | ProductsOnPurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOnPurchaseCreateOrConnectWithoutProductInput | ProductsOnPurchaseCreateOrConnectWithoutProductInput[]
    createMany?: ProductsOnPurchaseCreateManyProductInputEnvelope
    connect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
  }

  export type ProductsOnPurchaseUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductsOnPurchaseCreateWithoutProductInput, ProductsOnPurchaseUncheckedCreateWithoutProductInput> | ProductsOnPurchaseCreateWithoutProductInput[] | ProductsOnPurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOnPurchaseCreateOrConnectWithoutProductInput | ProductsOnPurchaseCreateOrConnectWithoutProductInput[]
    createMany?: ProductsOnPurchaseCreateManyProductInputEnvelope
    connect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsOnPurchaseUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductsOnPurchaseCreateWithoutProductInput, ProductsOnPurchaseUncheckedCreateWithoutProductInput> | ProductsOnPurchaseCreateWithoutProductInput[] | ProductsOnPurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOnPurchaseCreateOrConnectWithoutProductInput | ProductsOnPurchaseCreateOrConnectWithoutProductInput[]
    upsert?: ProductsOnPurchaseUpsertWithWhereUniqueWithoutProductInput | ProductsOnPurchaseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductsOnPurchaseCreateManyProductInputEnvelope
    set?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    disconnect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    delete?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    connect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    update?: ProductsOnPurchaseUpdateWithWhereUniqueWithoutProductInput | ProductsOnPurchaseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductsOnPurchaseUpdateManyWithWhereWithoutProductInput | ProductsOnPurchaseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductsOnPurchaseScalarWhereInput | ProductsOnPurchaseScalarWhereInput[]
  }

  export type ProductsOnPurchaseUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductsOnPurchaseCreateWithoutProductInput, ProductsOnPurchaseUncheckedCreateWithoutProductInput> | ProductsOnPurchaseCreateWithoutProductInput[] | ProductsOnPurchaseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOnPurchaseCreateOrConnectWithoutProductInput | ProductsOnPurchaseCreateOrConnectWithoutProductInput[]
    upsert?: ProductsOnPurchaseUpsertWithWhereUniqueWithoutProductInput | ProductsOnPurchaseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductsOnPurchaseCreateManyProductInputEnvelope
    set?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    disconnect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    delete?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    connect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    update?: ProductsOnPurchaseUpdateWithWhereUniqueWithoutProductInput | ProductsOnPurchaseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductsOnPurchaseUpdateManyWithWhereWithoutProductInput | ProductsOnPurchaseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductsOnPurchaseScalarWhereInput | ProductsOnPurchaseScalarWhereInput[]
  }

  export type ProductsOnPurchaseCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<ProductsOnPurchaseCreateWithoutPurchaseInput, ProductsOnPurchaseUncheckedCreateWithoutPurchaseInput> | ProductsOnPurchaseCreateWithoutPurchaseInput[] | ProductsOnPurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductsOnPurchaseCreateOrConnectWithoutPurchaseInput | ProductsOnPurchaseCreateOrConnectWithoutPurchaseInput[]
    createMany?: ProductsOnPurchaseCreateManyPurchaseInputEnvelope
    connect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPurchasesInput
    connect?: CustomerWhereUniqueInput
  }

  export type WorkerCreateNestedOneWithoutSalesInput = {
    create?: XOR<WorkerCreateWithoutSalesInput, WorkerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutSalesInput
    connect?: WorkerWhereUniqueInput
  }

  export type ProductsOnPurchaseUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<ProductsOnPurchaseCreateWithoutPurchaseInput, ProductsOnPurchaseUncheckedCreateWithoutPurchaseInput> | ProductsOnPurchaseCreateWithoutPurchaseInput[] | ProductsOnPurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductsOnPurchaseCreateOrConnectWithoutPurchaseInput | ProductsOnPurchaseCreateOrConnectWithoutPurchaseInput[]
    createMany?: ProductsOnPurchaseCreateManyPurchaseInputEnvelope
    connect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
  }

  export type ProductsOnPurchaseUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<ProductsOnPurchaseCreateWithoutPurchaseInput, ProductsOnPurchaseUncheckedCreateWithoutPurchaseInput> | ProductsOnPurchaseCreateWithoutPurchaseInput[] | ProductsOnPurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductsOnPurchaseCreateOrConnectWithoutPurchaseInput | ProductsOnPurchaseCreateOrConnectWithoutPurchaseInput[]
    upsert?: ProductsOnPurchaseUpsertWithWhereUniqueWithoutPurchaseInput | ProductsOnPurchaseUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: ProductsOnPurchaseCreateManyPurchaseInputEnvelope
    set?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    disconnect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    delete?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    connect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    update?: ProductsOnPurchaseUpdateWithWhereUniqueWithoutPurchaseInput | ProductsOnPurchaseUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: ProductsOnPurchaseUpdateManyWithWhereWithoutPurchaseInput | ProductsOnPurchaseUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: ProductsOnPurchaseScalarWhereInput | ProductsOnPurchaseScalarWhereInput[]
  }

  export type CustomerUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPurchasesInput
    upsert?: CustomerUpsertWithoutPurchasesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPurchasesInput, CustomerUpdateWithoutPurchasesInput>, CustomerUncheckedUpdateWithoutPurchasesInput>
  }

  export type WorkerUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<WorkerCreateWithoutSalesInput, WorkerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutSalesInput
    upsert?: WorkerUpsertWithoutSalesInput
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutSalesInput, WorkerUpdateWithoutSalesInput>, WorkerUncheckedUpdateWithoutSalesInput>
  }

  export type ProductsOnPurchaseUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<ProductsOnPurchaseCreateWithoutPurchaseInput, ProductsOnPurchaseUncheckedCreateWithoutPurchaseInput> | ProductsOnPurchaseCreateWithoutPurchaseInput[] | ProductsOnPurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductsOnPurchaseCreateOrConnectWithoutPurchaseInput | ProductsOnPurchaseCreateOrConnectWithoutPurchaseInput[]
    upsert?: ProductsOnPurchaseUpsertWithWhereUniqueWithoutPurchaseInput | ProductsOnPurchaseUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: ProductsOnPurchaseCreateManyPurchaseInputEnvelope
    set?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    disconnect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    delete?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    connect?: ProductsOnPurchaseWhereUniqueInput | ProductsOnPurchaseWhereUniqueInput[]
    update?: ProductsOnPurchaseUpdateWithWhereUniqueWithoutPurchaseInput | ProductsOnPurchaseUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: ProductsOnPurchaseUpdateManyWithWhereWithoutPurchaseInput | ProductsOnPurchaseUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: ProductsOnPurchaseScalarWhereInput | ProductsOnPurchaseScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<ProductCreateWithoutPurchasesInput, ProductUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchasesInput
    connect?: ProductWhereUniqueInput
  }

  export type PurchaseCreateNestedOneWithoutProductsInput = {
    create?: XOR<PurchaseCreateWithoutProductsInput, PurchaseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<ProductCreateWithoutPurchasesInput, ProductUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchasesInput
    upsert?: ProductUpsertWithoutPurchasesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPurchasesInput, ProductUpdateWithoutPurchasesInput>, ProductUncheckedUpdateWithoutPurchasesInput>
  }

  export type PurchaseUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<PurchaseCreateWithoutProductsInput, PurchaseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductsInput
    upsert?: PurchaseUpsertWithoutProductsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutProductsInput, PurchaseUpdateWithoutProductsInput>, PurchaseUncheckedUpdateWithoutProductsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type PurchaseCreateWithoutCustomerInput = {
    id?: string
    total: number
    createdAt?: Date | string
    products?: ProductsOnPurchaseCreateNestedManyWithoutPurchaseInput
    worker: WorkerCreateNestedOneWithoutSalesInput
  }

  export type PurchaseUncheckedCreateWithoutCustomerInput = {
    id?: string
    workerID: string
    total: number
    createdAt?: Date | string
    products?: ProductsOnPurchaseUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutCustomerInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput>
  }

  export type PurchaseCreateManyCustomerInputEnvelope = {
    data: PurchaseCreateManyCustomerInput | PurchaseCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type PetCreateWithoutCustomerInput = {
    id?: string
    name: string
    species: string
    race: string
    dateOfBirth: Date | string
    weight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduling?: SchedulingCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutCustomerInput = {
    id?: string
    name: string
    species: string
    race: string
    dateOfBirth: Date | string
    weight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduling?: SchedulingUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutCustomerInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutCustomerInput, PetUncheckedCreateWithoutCustomerInput>
  }

  export type PetCreateManyCustomerInputEnvelope = {
    data: PetCreateManyCustomerInput | PetCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutCustomerInput, PurchaseUncheckedUpdateWithoutCustomerInput>
    create: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutCustomerInput, PurchaseUncheckedUpdateWithoutCustomerInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutCustomerInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: StringFilter<"Purchase"> | string
    customerID?: StringFilter<"Purchase"> | string
    workerID?: StringFilter<"Purchase"> | string
    total?: FloatFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
  }

  export type PetUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutCustomerInput, PetUncheckedUpdateWithoutCustomerInput>
    create: XOR<PetCreateWithoutCustomerInput, PetUncheckedCreateWithoutCustomerInput>
  }

  export type PetUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutCustomerInput, PetUncheckedUpdateWithoutCustomerInput>
  }

  export type PetUpdateManyWithWhereWithoutCustomerInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    race?: StringFilter<"Pet"> | string
    dateOfBirth?: DateTimeFilter<"Pet"> | Date | string
    weight?: FloatFilter<"Pet"> | number
    customerID?: StringFilter<"Pet"> | string
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
  }

  export type CustomerCreateWithoutPetsInput = {
    id?: string
    name: string
    email: string
    address: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPetsInput = {
    id?: string
    name: string
    email: string
    address: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPetsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPetsInput, CustomerUncheckedCreateWithoutPetsInput>
  }

  export type SchedulingCreateWithoutPetInput = {
    id?: string
    date: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutSchedulingInput
    workers?: WorkersOnSchedulingsCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateWithoutPetInput = {
    id?: string
    serviceID: string
    date: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorkersOnSchedulingsUncheckedCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingCreateOrConnectWithoutPetInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutPetInput, SchedulingUncheckedCreateWithoutPetInput>
  }

  export type SchedulingCreateManyPetInputEnvelope = {
    data: SchedulingCreateManyPetInput | SchedulingCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutPetsInput = {
    update: XOR<CustomerUpdateWithoutPetsInput, CustomerUncheckedUpdateWithoutPetsInput>
    create: XOR<CustomerCreateWithoutPetsInput, CustomerUncheckedCreateWithoutPetsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPetsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPetsInput, CustomerUncheckedUpdateWithoutPetsInput>
  }

  export type CustomerUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type SchedulingUpsertWithWhereUniqueWithoutPetInput = {
    where: SchedulingWhereUniqueInput
    update: XOR<SchedulingUpdateWithoutPetInput, SchedulingUncheckedUpdateWithoutPetInput>
    create: XOR<SchedulingCreateWithoutPetInput, SchedulingUncheckedCreateWithoutPetInput>
  }

  export type SchedulingUpdateWithWhereUniqueWithoutPetInput = {
    where: SchedulingWhereUniqueInput
    data: XOR<SchedulingUpdateWithoutPetInput, SchedulingUncheckedUpdateWithoutPetInput>
  }

  export type SchedulingUpdateManyWithWhereWithoutPetInput = {
    where: SchedulingScalarWhereInput
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyWithoutPetInput>
  }

  export type SchedulingScalarWhereInput = {
    AND?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
    OR?: SchedulingScalarWhereInput[]
    NOT?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
    id?: StringFilter<"Scheduling"> | string
    petID?: StringFilter<"Scheduling"> | string
    serviceID?: StringFilter<"Scheduling"> | string
    date?: DateTimeFilter<"Scheduling"> | Date | string
    status?: EnumStatusFilter<"Scheduling"> | $Enums.Status
    createdAt?: DateTimeFilter<"Scheduling"> | Date | string
    updatedAt?: DateTimeFilter<"Scheduling"> | Date | string
  }

  export type SchedulingCreateWithoutServiceInput = {
    id?: string
    date: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    pet: PetCreateNestedOneWithoutSchedulingInput
    workers?: WorkersOnSchedulingsCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateWithoutServiceInput = {
    id?: string
    petID: string
    date: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    workers?: WorkersOnSchedulingsUncheckedCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingCreateOrConnectWithoutServiceInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput>
  }

  export type SchedulingCreateManyServiceInputEnvelope = {
    data: SchedulingCreateManyServiceInput | SchedulingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type SchedulingUpsertWithWhereUniqueWithoutServiceInput = {
    where: SchedulingWhereUniqueInput
    update: XOR<SchedulingUpdateWithoutServiceInput, SchedulingUncheckedUpdateWithoutServiceInput>
    create: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput>
  }

  export type SchedulingUpdateWithWhereUniqueWithoutServiceInput = {
    where: SchedulingWhereUniqueInput
    data: XOR<SchedulingUpdateWithoutServiceInput, SchedulingUncheckedUpdateWithoutServiceInput>
  }

  export type SchedulingUpdateManyWithWhereWithoutServiceInput = {
    where: SchedulingScalarWhereInput
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyWithoutServiceInput>
  }

  export type PetCreateWithoutSchedulingInput = {
    id?: string
    name: string
    species: string
    race: string
    dateOfBirth: Date | string
    weight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutSchedulingInput = {
    id?: string
    name: string
    species: string
    race: string
    dateOfBirth: Date | string
    weight: number
    customerID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetCreateOrConnectWithoutSchedulingInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutSchedulingInput, PetUncheckedCreateWithoutSchedulingInput>
  }

  export type ServiceCreateWithoutSchedulingInput = {
    id?: string
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUncheckedCreateWithoutSchedulingInput = {
    id?: string
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutSchedulingInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutSchedulingInput, ServiceUncheckedCreateWithoutSchedulingInput>
  }

  export type WorkersOnSchedulingsCreateWithoutSchedulingInput = {
    worker: WorkerCreateNestedOneWithoutSchedulingsInput
  }

  export type WorkersOnSchedulingsUncheckedCreateWithoutSchedulingInput = {
    workerID: string
  }

  export type WorkersOnSchedulingsCreateOrConnectWithoutSchedulingInput = {
    where: WorkersOnSchedulingsWhereUniqueInput
    create: XOR<WorkersOnSchedulingsCreateWithoutSchedulingInput, WorkersOnSchedulingsUncheckedCreateWithoutSchedulingInput>
  }

  export type WorkersOnSchedulingsCreateManySchedulingInputEnvelope = {
    data: WorkersOnSchedulingsCreateManySchedulingInput | WorkersOnSchedulingsCreateManySchedulingInput[]
    skipDuplicates?: boolean
  }

  export type PetUpsertWithoutSchedulingInput = {
    update: XOR<PetUpdateWithoutSchedulingInput, PetUncheckedUpdateWithoutSchedulingInput>
    create: XOR<PetCreateWithoutSchedulingInput, PetUncheckedCreateWithoutSchedulingInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutSchedulingInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutSchedulingInput, PetUncheckedUpdateWithoutSchedulingInput>
  }

  export type PetUpdateWithoutSchedulingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutSchedulingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    customerID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpsertWithoutSchedulingInput = {
    update: XOR<ServiceUpdateWithoutSchedulingInput, ServiceUncheckedUpdateWithoutSchedulingInput>
    create: XOR<ServiceCreateWithoutSchedulingInput, ServiceUncheckedCreateWithoutSchedulingInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutSchedulingInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutSchedulingInput, ServiceUncheckedUpdateWithoutSchedulingInput>
  }

  export type ServiceUpdateWithoutSchedulingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateWithoutSchedulingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkersOnSchedulingsUpsertWithWhereUniqueWithoutSchedulingInput = {
    where: WorkersOnSchedulingsWhereUniqueInput
    update: XOR<WorkersOnSchedulingsUpdateWithoutSchedulingInput, WorkersOnSchedulingsUncheckedUpdateWithoutSchedulingInput>
    create: XOR<WorkersOnSchedulingsCreateWithoutSchedulingInput, WorkersOnSchedulingsUncheckedCreateWithoutSchedulingInput>
  }

  export type WorkersOnSchedulingsUpdateWithWhereUniqueWithoutSchedulingInput = {
    where: WorkersOnSchedulingsWhereUniqueInput
    data: XOR<WorkersOnSchedulingsUpdateWithoutSchedulingInput, WorkersOnSchedulingsUncheckedUpdateWithoutSchedulingInput>
  }

  export type WorkersOnSchedulingsUpdateManyWithWhereWithoutSchedulingInput = {
    where: WorkersOnSchedulingsScalarWhereInput
    data: XOR<WorkersOnSchedulingsUpdateManyMutationInput, WorkersOnSchedulingsUncheckedUpdateManyWithoutSchedulingInput>
  }

  export type WorkersOnSchedulingsScalarWhereInput = {
    AND?: WorkersOnSchedulingsScalarWhereInput | WorkersOnSchedulingsScalarWhereInput[]
    OR?: WorkersOnSchedulingsScalarWhereInput[]
    NOT?: WorkersOnSchedulingsScalarWhereInput | WorkersOnSchedulingsScalarWhereInput[]
    workerID?: StringFilter<"WorkersOnSchedulings"> | string
    schedulingID?: StringFilter<"WorkersOnSchedulings"> | string
  }

  export type WorkersOnSchedulingsCreateWithoutWorkerInput = {
    scheduling: SchedulingCreateNestedOneWithoutWorkersInput
  }

  export type WorkersOnSchedulingsUncheckedCreateWithoutWorkerInput = {
    schedulingID: string
  }

  export type WorkersOnSchedulingsCreateOrConnectWithoutWorkerInput = {
    where: WorkersOnSchedulingsWhereUniqueInput
    create: XOR<WorkersOnSchedulingsCreateWithoutWorkerInput, WorkersOnSchedulingsUncheckedCreateWithoutWorkerInput>
  }

  export type WorkersOnSchedulingsCreateManyWorkerInputEnvelope = {
    data: WorkersOnSchedulingsCreateManyWorkerInput | WorkersOnSchedulingsCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutWorkerInput = {
    id?: string
    total: number
    createdAt?: Date | string
    products?: ProductsOnPurchaseCreateNestedManyWithoutPurchaseInput
    customer: CustomerCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutWorkerInput = {
    id?: string
    customerID: string
    total: number
    createdAt?: Date | string
    products?: ProductsOnPurchaseUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutWorkerInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutWorkerInput, PurchaseUncheckedCreateWithoutWorkerInput>
  }

  export type PurchaseCreateManyWorkerInputEnvelope = {
    data: PurchaseCreateManyWorkerInput | PurchaseCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type WorkersOnSchedulingsUpsertWithWhereUniqueWithoutWorkerInput = {
    where: WorkersOnSchedulingsWhereUniqueInput
    update: XOR<WorkersOnSchedulingsUpdateWithoutWorkerInput, WorkersOnSchedulingsUncheckedUpdateWithoutWorkerInput>
    create: XOR<WorkersOnSchedulingsCreateWithoutWorkerInput, WorkersOnSchedulingsUncheckedCreateWithoutWorkerInput>
  }

  export type WorkersOnSchedulingsUpdateWithWhereUniqueWithoutWorkerInput = {
    where: WorkersOnSchedulingsWhereUniqueInput
    data: XOR<WorkersOnSchedulingsUpdateWithoutWorkerInput, WorkersOnSchedulingsUncheckedUpdateWithoutWorkerInput>
  }

  export type WorkersOnSchedulingsUpdateManyWithWhereWithoutWorkerInput = {
    where: WorkersOnSchedulingsScalarWhereInput
    data: XOR<WorkersOnSchedulingsUpdateManyMutationInput, WorkersOnSchedulingsUncheckedUpdateManyWithoutWorkerInput>
  }

  export type PurchaseUpsertWithWhereUniqueWithoutWorkerInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutWorkerInput, PurchaseUncheckedUpdateWithoutWorkerInput>
    create: XOR<PurchaseCreateWithoutWorkerInput, PurchaseUncheckedCreateWithoutWorkerInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutWorkerInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutWorkerInput, PurchaseUncheckedUpdateWithoutWorkerInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutWorkerInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutWorkerInput>
  }

  export type WorkerCreateWithoutSchedulingsInput = {
    id?: string
    name: string
    role: $Enums.Role
    email: string
    salary: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: PurchaseCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutSchedulingsInput = {
    id?: string
    name: string
    role: $Enums.Role
    email: string
    salary: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: PurchaseUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerCreateOrConnectWithoutSchedulingsInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutSchedulingsInput, WorkerUncheckedCreateWithoutSchedulingsInput>
  }

  export type SchedulingCreateWithoutWorkersInput = {
    id?: string
    date: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    pet: PetCreateNestedOneWithoutSchedulingInput
    service: ServiceCreateNestedOneWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateWithoutWorkersInput = {
    id?: string
    petID: string
    serviceID: string
    date: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingCreateOrConnectWithoutWorkersInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutWorkersInput, SchedulingUncheckedCreateWithoutWorkersInput>
  }

  export type WorkerUpsertWithoutSchedulingsInput = {
    update: XOR<WorkerUpdateWithoutSchedulingsInput, WorkerUncheckedUpdateWithoutSchedulingsInput>
    create: XOR<WorkerCreateWithoutSchedulingsInput, WorkerUncheckedCreateWithoutSchedulingsInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutSchedulingsInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutSchedulingsInput, WorkerUncheckedUpdateWithoutSchedulingsInput>
  }

  export type WorkerUpdateWithoutSchedulingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: PurchaseUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutSchedulingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: PurchaseUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type SchedulingUpsertWithoutWorkersInput = {
    update: XOR<SchedulingUpdateWithoutWorkersInput, SchedulingUncheckedUpdateWithoutWorkersInput>
    create: XOR<SchedulingCreateWithoutWorkersInput, SchedulingUncheckedCreateWithoutWorkersInput>
    where?: SchedulingWhereInput
  }

  export type SchedulingUpdateToOneWithWhereWithoutWorkersInput = {
    where?: SchedulingWhereInput
    data: XOR<SchedulingUpdateWithoutWorkersInput, SchedulingUncheckedUpdateWithoutWorkersInput>
  }

  export type SchedulingUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutSchedulingNestedInput
    service?: ServiceUpdateOneRequiredWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    petID?: StringFieldUpdateOperationsInput | string
    serviceID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOnPurchaseCreateWithoutProductInput = {
    purchase: PurchaseCreateNestedOneWithoutProductsInput
  }

  export type ProductsOnPurchaseUncheckedCreateWithoutProductInput = {
    purchaseID: string
  }

  export type ProductsOnPurchaseCreateOrConnectWithoutProductInput = {
    where: ProductsOnPurchaseWhereUniqueInput
    create: XOR<ProductsOnPurchaseCreateWithoutProductInput, ProductsOnPurchaseUncheckedCreateWithoutProductInput>
  }

  export type ProductsOnPurchaseCreateManyProductInputEnvelope = {
    data: ProductsOnPurchaseCreateManyProductInput | ProductsOnPurchaseCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductsOnPurchaseUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductsOnPurchaseWhereUniqueInput
    update: XOR<ProductsOnPurchaseUpdateWithoutProductInput, ProductsOnPurchaseUncheckedUpdateWithoutProductInput>
    create: XOR<ProductsOnPurchaseCreateWithoutProductInput, ProductsOnPurchaseUncheckedCreateWithoutProductInput>
  }

  export type ProductsOnPurchaseUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductsOnPurchaseWhereUniqueInput
    data: XOR<ProductsOnPurchaseUpdateWithoutProductInput, ProductsOnPurchaseUncheckedUpdateWithoutProductInput>
  }

  export type ProductsOnPurchaseUpdateManyWithWhereWithoutProductInput = {
    where: ProductsOnPurchaseScalarWhereInput
    data: XOR<ProductsOnPurchaseUpdateManyMutationInput, ProductsOnPurchaseUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductsOnPurchaseScalarWhereInput = {
    AND?: ProductsOnPurchaseScalarWhereInput | ProductsOnPurchaseScalarWhereInput[]
    OR?: ProductsOnPurchaseScalarWhereInput[]
    NOT?: ProductsOnPurchaseScalarWhereInput | ProductsOnPurchaseScalarWhereInput[]
    productID?: StringFilter<"ProductsOnPurchase"> | string
    purchaseID?: StringFilter<"ProductsOnPurchase"> | string
  }

  export type ProductsOnPurchaseCreateWithoutPurchaseInput = {
    product: ProductCreateNestedOneWithoutPurchasesInput
  }

  export type ProductsOnPurchaseUncheckedCreateWithoutPurchaseInput = {
    productID: string
  }

  export type ProductsOnPurchaseCreateOrConnectWithoutPurchaseInput = {
    where: ProductsOnPurchaseWhereUniqueInput
    create: XOR<ProductsOnPurchaseCreateWithoutPurchaseInput, ProductsOnPurchaseUncheckedCreateWithoutPurchaseInput>
  }

  export type ProductsOnPurchaseCreateManyPurchaseInputEnvelope = {
    data: ProductsOnPurchaseCreateManyPurchaseInput | ProductsOnPurchaseCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    address: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    address: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPurchasesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
  }

  export type WorkerCreateWithoutSalesInput = {
    id?: string
    name: string
    role: $Enums.Role
    email: string
    salary: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedulings?: WorkersOnSchedulingsCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    role: $Enums.Role
    email: string
    salary: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedulings?: WorkersOnSchedulingsUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerCreateOrConnectWithoutSalesInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutSalesInput, WorkerUncheckedCreateWithoutSalesInput>
  }

  export type ProductsOnPurchaseUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: ProductsOnPurchaseWhereUniqueInput
    update: XOR<ProductsOnPurchaseUpdateWithoutPurchaseInput, ProductsOnPurchaseUncheckedUpdateWithoutPurchaseInput>
    create: XOR<ProductsOnPurchaseCreateWithoutPurchaseInput, ProductsOnPurchaseUncheckedCreateWithoutPurchaseInput>
  }

  export type ProductsOnPurchaseUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: ProductsOnPurchaseWhereUniqueInput
    data: XOR<ProductsOnPurchaseUpdateWithoutPurchaseInput, ProductsOnPurchaseUncheckedUpdateWithoutPurchaseInput>
  }

  export type ProductsOnPurchaseUpdateManyWithWhereWithoutPurchaseInput = {
    where: ProductsOnPurchaseScalarWhereInput
    data: XOR<ProductsOnPurchaseUpdateManyMutationInput, ProductsOnPurchaseUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type CustomerUpsertWithoutPurchasesInput = {
    update: XOR<CustomerUpdateWithoutPurchasesInput, CustomerUncheckedUpdateWithoutPurchasesInput>
    create: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPurchasesInput, CustomerUncheckedUpdateWithoutPurchasesInput>
  }

  export type CustomerUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type WorkerUpsertWithoutSalesInput = {
    update: XOR<WorkerUpdateWithoutSalesInput, WorkerUncheckedUpdateWithoutSalesInput>
    create: XOR<WorkerCreateWithoutSalesInput, WorkerUncheckedCreateWithoutSalesInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutSalesInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutSalesInput, WorkerUncheckedUpdateWithoutSalesInput>
  }

  export type WorkerUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedulings?: WorkersOnSchedulingsUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedulings?: WorkersOnSchedulingsUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type ProductCreateWithoutPurchasesInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    description: string
    price: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutPurchasesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPurchasesInput, ProductUncheckedCreateWithoutPurchasesInput>
  }

  export type PurchaseCreateWithoutProductsInput = {
    id?: string
    total: number
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPurchasesInput
    worker: WorkerCreateNestedOneWithoutSalesInput
  }

  export type PurchaseUncheckedCreateWithoutProductsInput = {
    id?: string
    customerID: string
    workerID: string
    total: number
    createdAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutProductsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutProductsInput, PurchaseUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutPurchasesInput = {
    update: XOR<ProductUpdateWithoutPurchasesInput, ProductUncheckedUpdateWithoutPurchasesInput>
    create: XOR<ProductCreateWithoutPurchasesInput, ProductUncheckedCreateWithoutPurchasesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPurchasesInput, ProductUncheckedUpdateWithoutPurchasesInput>
  }

  export type ProductUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpsertWithoutProductsInput = {
    update: XOR<PurchaseUpdateWithoutProductsInput, PurchaseUncheckedUpdateWithoutProductsInput>
    create: XOR<PurchaseCreateWithoutProductsInput, PurchaseUncheckedCreateWithoutProductsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutProductsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutProductsInput, PurchaseUncheckedUpdateWithoutProductsInput>
  }

  export type PurchaseUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPurchasesNestedInput
    worker?: WorkerUpdateOneRequiredWithoutSalesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    workerID?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyCustomerInput = {
    id?: string
    workerID: string
    total: number
    createdAt?: Date | string
  }

  export type PetCreateManyCustomerInput = {
    id?: string
    name: string
    species: string
    race: string
    dateOfBirth: Date | string
    weight: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsOnPurchaseUpdateManyWithoutPurchaseNestedInput
    worker?: WorkerUpdateOneRequiredWithoutSalesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerID?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsOnPurchaseUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerID?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduling?: SchedulingUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduling?: SchedulingUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingCreateManyPetInput = {
    id?: string
    serviceID: string
    date: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutSchedulingNestedInput
    workers?: WorkersOnSchedulingsUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorkersOnSchedulingsUncheckedUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateManyWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingCreateManyServiceInput = {
    id?: string
    petID: string
    date: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutSchedulingNestedInput
    workers?: WorkersOnSchedulingsUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    petID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: WorkersOnSchedulingsUncheckedUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    petID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkersOnSchedulingsCreateManySchedulingInput = {
    workerID: string
  }

  export type WorkersOnSchedulingsUpdateWithoutSchedulingInput = {
    worker?: WorkerUpdateOneRequiredWithoutSchedulingsNestedInput
  }

  export type WorkersOnSchedulingsUncheckedUpdateWithoutSchedulingInput = {
    workerID?: StringFieldUpdateOperationsInput | string
  }

  export type WorkersOnSchedulingsUncheckedUpdateManyWithoutSchedulingInput = {
    workerID?: StringFieldUpdateOperationsInput | string
  }

  export type WorkersOnSchedulingsCreateManyWorkerInput = {
    schedulingID: string
  }

  export type PurchaseCreateManyWorkerInput = {
    id?: string
    customerID: string
    total: number
    createdAt?: Date | string
  }

  export type WorkersOnSchedulingsUpdateWithoutWorkerInput = {
    scheduling?: SchedulingUpdateOneRequiredWithoutWorkersNestedInput
  }

  export type WorkersOnSchedulingsUncheckedUpdateWithoutWorkerInput = {
    schedulingID?: StringFieldUpdateOperationsInput | string
  }

  export type WorkersOnSchedulingsUncheckedUpdateManyWithoutWorkerInput = {
    schedulingID?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsOnPurchaseUpdateManyWithoutPurchaseNestedInput
    customer?: CustomerUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsOnPurchaseUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOnPurchaseCreateManyProductInput = {
    purchaseID: string
  }

  export type ProductsOnPurchaseUpdateWithoutProductInput = {
    purchase?: PurchaseUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductsOnPurchaseUncheckedUpdateWithoutProductInput = {
    purchaseID?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsOnPurchaseUncheckedUpdateManyWithoutProductInput = {
    purchaseID?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsOnPurchaseCreateManyPurchaseInput = {
    productID: string
  }

  export type ProductsOnPurchaseUpdateWithoutPurchaseInput = {
    product?: ProductUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type ProductsOnPurchaseUncheckedUpdateWithoutPurchaseInput = {
    productID?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsOnPurchaseUncheckedUpdateManyWithoutPurchaseInput = {
    productID?: StringFieldUpdateOperationsInput | string
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