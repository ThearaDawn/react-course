function Message() {
  const name = "Theara";

  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello</h1>;
}

export default Message;
