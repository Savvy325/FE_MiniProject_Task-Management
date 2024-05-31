import React from "react";
import { Task } from "../interfaces/CandleOrder";

interface OrderListProps {
  tasks: Task[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const OrderList: React.FC<OrderListProps> = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="container">
      <h2>Orders List</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
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
                onClick={() => onEdit(task.id!)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(task.id!)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;