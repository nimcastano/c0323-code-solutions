import React, { useState } from 'react';

/**
 * Manages outstanding and completed tasks.
 * Outstanding and completed tasks are displayed in separate lists.
 * Displayed tasks can be filtered using the Filter input. Only tasks
 * whose name matches the filter value are displayed in either list.
 * Props:
 *   - tasks, an Array of { id: number, name: string, completed: boolean }
 * TODO: It doesn't work!
 */
export default function TaskManager({ tasks }) {
  const [filter, setFilter] = useState('');
  const [completed, setCompleted] = useState({});
  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <div>
        <OutstandingTasks
          tasks={tasks}
          completed={completed}
          setCompleted={setCompleted}
        />
        <CompletedTasks tasks={tasks} completed={completed} />
      </div>
    </div>
  );
}

/**
 * An input field that can be used to filter a list of items.
 */
function Filter({ filter, setFilter }) {
  return (
    <div>
      <span>Filter: </span>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

/**
 * An array of tasks with a checkbox to indicate they are completed.
 * Props:
 *   - tasks, the tasks to display
 */
function OutstandingTasks({ tasks, completed, setCompleted }) {
  // Tracks completed state of all tasks. key = task.id, value = task.completed

  if (tasks.length === 0) return <div>No outstanding tasks.</div>;
  return (
    <div>
      <div>Outstanding Tasks</div>
      <ul style={{ listStyleType: 'none' }}>
        {tasks.map((task) =>
          completed[task.id] ? undefined : (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={!!completed[task.id]}
                  onChange={() =>
                    setCompleted({ ...completed, [task.id]: !task.completed })
                  }
                />
                <span>{task.name}</span>
              </label>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

/**
 * An array of tasks.
 * Props:
 *   - tasks, the tasks to display
 */
function CompletedTasks({ tasks, completed }) {
  if (completed.length === 0) return <div>No completed tasks.</div>;
  return (
    <div>
      <div>Completed Tasks</div>
      <ul style={{ listStyleType: 'none' }}>
        {tasks.map((task) =>
          !!completed[task.id] ? <li key={task.id}>{task.name}</li> : undefined
        )}
      </ul>
    </div>
  );
}
