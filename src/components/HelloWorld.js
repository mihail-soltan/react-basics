import React from "react"

const HelloWorldComponent = () => {
    const passedProp = "Jupiter"
    const fakeData = [
        {
            name: "Random Name",
            age: 100
        },
        {
            name: "Random Name",
            age: 100
        },
    ]

    return (
        <div>
            <h1>
                Hello {passedProp}
            </h1>
            {fakeData.map((person) =>
                <div>
                    <h2>
                        Hello, {person.name}. You are {person.age} years old
                    </h2>
                </div>
            )}
        </div>
    )
}

export default HelloWorldComponent