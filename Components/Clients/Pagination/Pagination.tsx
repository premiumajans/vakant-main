import React, {Dispatch, SetStateAction} from "react";
import {productItem} from "@/interfaces/common";

const Pagination = ({setPagination, data, pagination}: {
    data: productItem[],
    setPagination?: Dispatch<SetStateAction<number>>,
    pagination: number
}) => {

    const generatePagination = (result: any) => {
        const paginationList = []
        const length = Math.ceil(result.length / 10)
        for (let i = 1; i <= length; i++) {
            paginationList.push(<li className={i === pagination ? 'active' : ''} key={i}>
                <span onClick={() => {
                    setPagination!(i)
                    window.scrollTo(0, 0);
                }} style={{cursor: 'pointer'}}
                      className={"page-numbers"}>
                    {i}
                </span>
            </li>)
        }

        return paginationList
    }


    return <>
        {Math.ceil(data.length / 10) > 1 ?
            <div className="block-27">
                <ul>
                    <li onClick={() => {
                        if (pagination - 1 >= 1) {
                            setPagination!(pagination - 1)
                            window.scrollTo(0, 0);
                        }
                    }}><a href="#">&lt;</a></li>
                    {generatePagination(data)}
                    <li onClick={() => {
                        if (pagination + 1 <= Math.ceil(data.length / 10)) {
                            setPagination!(pagination + 1)
                            window.scrollTo(0, 0);
                        }
                    }}><a href="#">&gt;</a></li>
                </ul>
            </div>
           : '' }

    </>
};

export default Pagination;