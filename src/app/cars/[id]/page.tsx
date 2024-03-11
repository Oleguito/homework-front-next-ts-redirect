type ParamsType = {
    params: {
        id: number;
    };
};

const OneCar = ({ params }: ParamsType) => {
    return (
        <>
            <div>{params.id}</div>
            {/* <div>{searchParams.name}</div> */}
        </>
    );
};

export default OneCar;
