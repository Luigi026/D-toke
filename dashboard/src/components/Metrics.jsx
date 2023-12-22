import PropTypes from 'prop-types'
import { MetricItem}  from "./MetricItem";

export const Metrics = ({totalProducts}) => {
  const items = [
    {
      id: crypto.randomUUID(),
      color: "primary",
      title: "Productos Totales en Base de datos",
      value: totalProducts,
      icon: "fa-boxes-stacked",
    },
    {
      id: crypto.randomUUID(),
      color: "success",
      title: "Marcas en Total",
      value: 4,
      icon: "fa-award",
    },
    {
      id: crypto.randomUUID(),
      color: "warning",
      title: "Usuarios registrados",
      value: 2,
      icon: "fa-user",
    },
  ];

  return (
    <div className="row">
      {items.map(({id, title, value, color, icon}) => (
        <MetricItem key={id} title={title} value={value} color= {color} icon={icon} />
      ))}
    </div>
  );
};

Metrics.propTypes = {
  totalProducts : PropTypes.number
}