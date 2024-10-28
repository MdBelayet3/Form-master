import PropTypes from 'prop-types';
import Special from '../Special/Special';

const Cousin = ({cousin,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{cousin}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
            </section>
        </div>
    );
};

Cousin.propTypes = {
    cousin: PropTypes.string,
    asset: PropTypes.string,
};

export default Cousin;