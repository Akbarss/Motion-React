// src/TaskForm.js
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const TaskForm = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues || { taskName: "" },
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        type="text"
        name="taskName"
        placeholder="Task Name"
        {...register("taskName", { required: "Task name is required" })}
      />
      {errors.taskName && <span>{errors.taskName.message}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
