import React from 'react';
import { Task } from '../interfaces/CandleOrder';

interface OrderDetailsProps{
    task: Task;
    onEdit: (task:Task) => void;
}
const OrderDetails: React.FC<OrderDetailsProps> =({task, onEdit}) => {
  return (
    <div className='container'>
        <h2>Order Details</h2>
         <div>
              <h5>{task.title}</h5>
              <p>{task.description}</p>
              <span
                className={`badge ${
                  task.status === "completed"
                    ? "badge-success"
                    : "badge-warning"
                }`}
              >
                {task.status}
              </span>
            </div>
            <div>
              <button
                className="btn btn-primary mr-2"
                onClick={() => onEdit(task)}
              >
                Edit
              </button>
              </div>
      
    </div>
  )
}

export default OrderDetails