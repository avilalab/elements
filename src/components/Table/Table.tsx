import { useState } from 'react';
import './Table.scss';

export interface TableProps<T extends Object> {
    fields: (keyof T)[];
    data?: T[];
    actions?: (item: T) => JSX.Element;
    options?: {
        noDataRender?: () => JSX.Element;
    }
}

export function Table<T extends Object>({
    fields,
    data,
    actions,
    options
}: TableProps<T>) {
    const [list, setList] = useState<T[] | undefined>(data);
    const [ascending, setAscending] = useState(true);
    const [sortedBy, setSortedBy] = useState<keyof T | null>(null);
    const prepareLabel = (value: string) : string => value.split('')[0].toLocaleUpperCase()
                                                    + value.slice(1).toLocaleLowerCase();
    
    function HandleSortList(e: any, key: keyof T) {
        e.preventDefault();

        if(sortedBy !== key) {
            setSortedBy(key);
            setAscending(true);
        } else {
            setAscending(!ascending);
        }

        if(list) {
            const sorted = list.sort((a, b) => {
                const valueA = a[key];
                const valueB = b[key];
            
                if (valueA < valueB) {
                    let asc = sortedBy !== key ? true : !ascending;

                    return asc ? -1 : 1;
                }

                if (valueA > valueB) {
                    let asc = sortedBy !== key ? true : !ascending;

                    return asc ? 1 : -1;
                }

                return 0;
            });

            setList(sorted);
        }
    }

    if(!data) {
        if(options?.noDataRender) 
            return options.noDataRender();

        return <span>There is no data to show.</span>;
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    { fields.map( field => {
                        let label = prepareLabel(field.toString());

                        if(field.toString().toLocaleLowerCase() === 'id') {
                            label = '#';
                        }

                        return (<th 
                                    scope='col'
                                    onClick={ (e) => HandleSortList(e, field)}
                                >
                                    <div className="d-flex align-items-center" style={{ gap: 8 }}>
                                        { label }
                                        { 
                                            sortedBy === field ?
                                                ascending ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>
                                            : '' 
                                        }
                                    </div>
                                </th>);
                    }) }
                    { actions ? <th scope='col'>Actions</th> : '' }
                </tr>
            </thead>
            <tbody>
                { data.map( item => (
                    <tr>
                        { fields.map( field => {
                            if(field in item) {
                                let value: any = item[field];

                                if(typeof value === 'string' && value.toLocaleLowerCase() === 'id') {
                                    return <td scope="row">{ value }</td>
                                }
                                return <td>{ value.toString() }</td>;
                            }
                        } ) }
                        { actions ? <td>{ actions(item) }</td> : '' }
                    </tr>
                ) ) }
            </tbody>
        </table>
    );
}