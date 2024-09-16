const handleMessage = (event) => {
  if (event.origin.indexOf("ai-flow.net") === -1) {
    return;
  }

  if (event.data && event.data.type === "getContent") {
    const targetElement = document.querySelector("main");
    if (targetElement) {
      event.source.postMessage(
        {
          type: "targetContent",
          content: targetElement.innerHTML,
        },
        event.origin
      );
    }
  }
};

window.addEventListener("message", handleMessage);
