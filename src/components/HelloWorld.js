const HelloWorldComponent = ({ groupName, fakeData }) => {

    return (
        <div>
            <h1>
                Hello {groupName}
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