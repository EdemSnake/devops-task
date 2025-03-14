import React, { useState } from 'react';
import cls from './Counter.module.scss';

const MainPage = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={cls.counterContainer}>
            <h1 className={cls.counterText}>
                Counter:
                {count}
            </h1>
            <button type="button" className={cls.counterButton} onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
};

export default MainPage;
