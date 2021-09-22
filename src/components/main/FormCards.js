import React, { useState } from "react";

export const FormCards = ({ setCards }) => {
    const [value, setValue] = useState("");

    const handleInputValue = (e) => {
        setValue(e.target.value);
    };

    const handleInputForm = (e) => {
        e.preventDefault();
        setCards((val) => [value, ...val]);
    };
    return (
        <section className="container__cards-find">
            <form onSubmit={handleInputForm}>
                <input
                    type="search"
                    onChange={handleInputValue}
                    value={value}
                    placeholder="Find your Country"
                />
            </form>
        </section>
    );
};
