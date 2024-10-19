// import React from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { getTasks, createTask, deleteTask } from "../api/api";

// const TaskList = () => {
//   const queryClient = useQueryClient();

//   // استفاده از useQuery برای دریافت تسک‌ها
//   const {
//     data: tasks = [],
//     isLoading,
//     isError,
//   } = useQuery(["tasks"], getTasks);

//   // استفاده از useMutation برای ایجاد تسک جدید
//   const createTaskMutation = useMutation(createTask, {
//     onSuccess: () => {
//       // بی‌اعتبار کردن کش بعد از ایجاد تسک جدید
//       queryClient.invalidateQueries(["tasks"]);
//     },
//   });

//   // استفاده از useMutation برای حذف تسک
//   const deleteTaskMutation = useMutation(deleteTask, {
//     onSuccess: () => {
//       // بی‌اعتبار کردن کش بعد از حذف تسک
//       queryClient.invalidateQueries(["tasks"]);
//     },
//   });

//   // تابع برای ایجاد تسک جدید
//   const handleCreateTask = () => {
//     const newTask = { content: "New Task", description: "Task description" };
//     createTaskMutation.mutate(newTask);
//   };

//   // تابع برای حذف تسک
//   const handleDeleteTask = (taskId: string) => {
//     deleteTaskMutation.mutate(taskId);
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error fetching tasks</div>;

//   return (
//     <div>
//       <h1>Task List</h1>
//       <button onClick={handleCreateTask}>Add Task</button>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             {task.content}
//             <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;
