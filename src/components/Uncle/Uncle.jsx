import Cousin from "../cousin/cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin cousin={'Malek'}></Cousin>
                <Cousin cousin={'selina'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;