import { Observable } from 'rxjs';
export interface Type<T> extends Function {
    new (...args: any[]): T;
}
export declare function isType<T>(val: any): val is Type<T>;
export declare enum ChangeDetectionStrategy {
    OnPush = 0,
    Default = 1
}
export declare enum ViewEncapsulation {
    Emulated = 0,
    Native = 1,
    None = 2,
    ShadowDom = 3
}
export declare abstract class QueryList<T> {
    readonly dirty = true;
    private _results;
    readonly changes: Observable<any>;
    readonly length: number;
    readonly first: T;
    readonly last: T;
    abstract map<U>(fn: (item: T, index: number, array: T[]) => U): U[];
    abstract filter(fn: (item: T, index: number, array: T[]) => boolean): T[];
    abstract find(fn: (item: T, index: number, array: T[]) => boolean): T | undefined;
    abstract reduce<U>(fn: (prevValue: U, curValue: T, curIndex: number, array: T[]) => U, init: U): U;
    abstract forEach(fn: (item: T, index: number, array: T[]) => void): void;
    abstract some(fn: (value: T, index: number, array: T[]) => boolean): boolean;
    abstract toArray(): T[];
    abstract toString(): string;
    abstract reset(res: Array<T | any[]>): void;
    abstract notifyOnChanges(): void;
    abstract setDirty(): void;
    abstract destroy(): void;
}
export declare type UrlMatcher = (segments: UrlSegment[], group: UrlSegmentGroup, route: Route) => UrlMatchResult;
export declare type UrlMatchResult = {
    consumed: UrlSegment[];
    posParams?: {
        [name: string]: UrlSegment;
    };
};
export declare type Data = {
    [name: string]: any;
};
export declare type ResolveData = {
    [name: string]: any;
};
export declare type Routes = Route[];
export declare type LoadChildrenCallback = () => Type<any> | Promise<Type<any>> | Observable<Type<any>>;
export declare type LoadChildren = string | LoadChildrenCallback;
export declare type Params = {
    [key: string]: any;
};
export declare abstract class ActivatedRouteSnapshot {
    url: UrlSegment[];
    params: Params;
    queryParams: Params;
    fragment: string;
    data: Data;
    outlet: string;
    component: Type<any> | string | null;
    readonly routeConfig: Route | null;
    readonly root: ActivatedRouteSnapshot;
    readonly parent: ActivatedRouteSnapshot | null;
    readonly firstChild: ActivatedRouteSnapshot | null;
    readonly children: ActivatedRouteSnapshot[];
    readonly pathFromRoot: ActivatedRouteSnapshot[];
    readonly paramMap: ParamMap;
    readonly queryParamMap: ParamMap;
    abstract toString(): string;
}
export declare type RunGuardsAndResolvers = 'pathParamsChange' | 'pathParamsOrQueryParamsChange' | 'paramsChange' | 'paramsOrQueryParamsChange' | 'always' | ((from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) => boolean);
export interface Route {
    path?: string;
    pathMatch?: string;
    matcher?: UrlMatcher;
    component?: Type<any>;
    redirectTo?: string;
    outlet?: string;
    canActivate?: any[];
    canActivateChild?: any[];
    canDeactivate?: any[];
    canLoad?: any[];
    data?: Data;
    resolve?: ResolveData;
    children?: Routes;
    loadChildren?: LoadChildren;
    runGuardsAndResolvers?: RunGuardsAndResolvers;
}
export declare abstract class UrlSegmentGroup {
    segments: UrlSegment[];
    children: {
        [key: string]: UrlSegmentGroup;
    };
    parent: UrlSegmentGroup | null;
    abstract hasChildren(): boolean;
    readonly numberOfChildren: number;
    abstract toString(): string;
}
export interface ParamMap {
    has(name: string): boolean;
    get(name: string): string | null;
    getAll(name: string): string[];
    readonly keys: string[];
}
export declare abstract class UrlSegment {
    readonly parameterMap: ParamMap;
    path: string;
    parameters: {
        [name: string]: string;
    };
    abstract toString(): string;
}
