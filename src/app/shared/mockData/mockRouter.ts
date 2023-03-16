import { NavigationEnd } from "@angular/router";
import { Observable, of } from "rxjs";

export function MockActivatedRouteValue(param: any, queryParams: any) {
    return {
        paramMap: param,
        queryParams,
        snapshot: {
            queryParams: {
                returnUrl: 'merchant',
                noRedirect: false
            }
        }
    }
}
export function MockRouterValue() {
    return {
        navigateByUrl(url: string) { return url; },
        navigate(urlParams2: string[], param2: any) {
            return {
                urlParams2,
                param2
            }
        },
        url: "/admin/user",
        events: of(new NavigationEnd(0, '/admin/user', '/admin/user')),
        routerState: {},
        routeReuseStrategy: {
            shouldReuseRoute() {

            }
        }
    }
}
export function MockActivatedRouteValueWithParam(param: any, queryParams: any) {
    return {
        params: param,
        queryParams
    }
}
export class MockProfileShare {
    getProfileInfo() {
        return of({ avatarUrl: 'abcdef' })
    }
    detailProfile() {
        return of({
            error_code: "00",
            data: {
                language: "vn"
            },
            avatar: "abcdef"
        })
    }
}
export class MockRouter {
    public ne = new NavigationEnd(
        0,
        "/pdp/project-details/4/edit",
        "/pdp/project-details/4/edit"
    );
    public events = new Observable((observer) => {
        observer.next(this.ne);
        observer.complete();
    });
    navigateByUrl(url: string) { return url; }
    navigate(urlParams: string[], param: any) {
        return {
            urlParams,
            param
        }
    }
    createUrlTree() { }
    serializeUrl() { }
    routeReuseStrategy: {
        shouldReuseRoute()
    }
}