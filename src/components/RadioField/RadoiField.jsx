import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { footbal } from '../../configs/constant';
import { Cricket } from '../../configs/constant';

class Radoifield extends Component {

    render() {
        const { error, value, onChange, RadioSelectOptions, SelectOptions, RadioOptions } = this.props;
        return (
            <div>
                 {
            (SelectOptions === 'select' && null)
        || (SelectOptions === 'football'
            && <div>
                  {footbal.map(field => (<>
              <input type="radio" value={field.label} name="footbal" onChange={RadioSelectOptions} />
              <span>  { field.label } </span>
              </>))}
          </div>)
            || (SelectOptions === 'cricket' && <div>
                 {Cricket.map(field => (<>
              <input type="radio" value={field.label} name="cricket" onChange={RadioSelectOptions} />
              <span>  { field.label } </span>
              </>))}
                </div>)
        }
            </div>
        )
    }
}

Radoifield.propTypes = {
    error: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}
Radoifield.defaultProps = {
    error: '',

}

export default Radoifield;