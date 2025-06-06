import PropTypes from "prop-types";

export const GifItems = ({ title, url, id }) => {

 return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

GifItems.propTyoes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired,
}