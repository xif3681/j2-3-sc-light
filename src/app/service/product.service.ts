
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';



@Injectable()
export class ProductService {
    public url: string;
    constructor(private http: Http) {

    }
    // 城市列表
    getZoneDefault(): Observable<any> {
        // return Observable.of(ARTICLESTYPE);

        return this.http.get('/api/zone/default')
            .pipe(map((res: Response) => {
                if (res.status === 200) {
                    const data = res.json();
                    data.regions[0].open = true;

                    return data;
                } else {
                    return res.json().code.toString();

                }
            }));
    }

    // 设备列表
    getDevice(): Observable<any> {
        return this.http.get('/api/device/type/all')
            .pipe(map((res: Response) => {
                if (res.status === 200) {
                    const data = res.json();
                    return data;
                } else  {
                    return res.json().code.toString();

                }
            }));

    }

    // 获取设备型号
    getModel(type: number, page: number, pagesize: number): Observable<any> {
        return this.http.get(`/api/device/model?type=${type}&page=${page}&pageSize=${pagesize}`)
            .pipe(map((res: Response) => {
                if (res.status === 200) {
                    const data = res.json();
                    return data;
                } else  {
                    return res.json().code.toString();

                }
            }));
    }

    // 新增设备型号
    setModel(name, description, type, isGateway): Observable<any> {
        return this.http.post(`/api/device/model`, {
            'name': name,
            'description': description,
            'type': type,
            'isGateway': isGateway,
        })
        .pipe(map((res: Response) => {
            if (res.status === 200) {
                const data = res.json();
                return data;
            } else {
                return res.json().code.toString();

            }
        }));
    }

    // 修改设备型号
    updateModel(id, name, description, type, isGateway): Observable<any> {
        return this.http.put(`/api/device/model`, {
            'id': id,
            'name': name,
            'description': description,
            'type': type,
            'isGateway': isGateway
        })
            .pipe(map((res: Response) => {
                if (res.status === 200) {
                    const data = { status: 200 };
                    return data;
                } else {
                    return res.json().code.toString();

                }
            }));
    }

    // 设备型号/api/position?id=1
    delModel(id) {
        return this.http.delete(`/api/device/model?id=${id}`)
            .pipe(map((res: Response) => {
                if (res.status === 200) {
                    const data = { status: 200 };
                    return data;
                } else {
                    return res.json().code.toString();

                }
            }));
    }






}
