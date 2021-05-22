import P from 'prop-types';
import './styles.css';

export const TextInput = ({ actionFn, inputValue }) => {
  return (
    <input className="text-input" onChange={actionFn} value={inputValue} type="text" placeholder="Type your search" />
  );
};

TextInput.propTypes = {
  actionFn: P.func.isRequired,
  inputValue: P.string.isRequired,
};
