import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./CountSlice";

export function Counter() {
    const count = useSelector((a) => a.counter.value); // Fixed selector
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <button
                    className="btn btn-success m-1"
                    aria-label="increase value"
                    onClick={() => dispatch(increase())}
                >
                    Increase {count}
                </button>
                <button
                    className="btn btn-danger m-1"
                    aria-label="decrease value"
                    onClick={() => dispatch(decrease())}
                >
                    Decrease {count}
                </button>
            </div>
        </>
    );
}
