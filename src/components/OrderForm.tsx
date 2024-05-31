import React, { useState, useEffect } from "react";
import { Task } from '../interfaces/CandleOrder';

interface OrderFormProps{
    task?: Task;
    onSubmit: (task: Task) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({task, onSubmit}) => {
    const [title, setTitle] = useState(task?.title || '')
    const [description, setDescription] = useState(task?.description || '')
    const [status, setStatus] = useState<Task['status']>(task?.status || 'pending')

    
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask = {
            id: task?.id || Date.now(),
            title,
            description,
            status
        };
        onSubmit(newTask);
    }

    
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value as Task['status'])
    }

  return (
    <div className="container">
      <h2>{task ? "Edit Order" : "Create Order"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            className="form-control"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}

export default OrderForm