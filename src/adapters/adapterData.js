export const adapterData = (data) => {
  const adapter = data.map((el) => ({
    client: el.cliente,
    videoLink: el.linkVideo,
    scenery: el.escenario,
    transcription: el.transcripcion,
    tasks: el.preguntas.map((e) => ({
      task: e.texto,
      taskDuration: e.tiempo,
    })),
  }));
  return adapter;
};
