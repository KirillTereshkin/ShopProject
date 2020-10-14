export default function(context) {
  const setFilterInput = (valMin, valMax) => `₽ ${valMin} - ₽ ${valMax}`;

  const pricesFilter = context.pricesFilter();

  const filterChangeHandler = (event, ui) => {
    const { values } = ui;
    context.currentMin = values[0];
    context.currentMax = values[1];
    $("#amount").val(setFilterInput(context.currentMin, context.currentMax));
  };

  $("#slider-range").slider({
    range: true,
    min: pricesFilter.totalMin,
    max: pricesFilter.totalMax,
    values: [context.currentMin, context.currentMax],
    slide: filterChangeHandler,
  });

  $("#amount").val(
    setFilterInput(
      $("#slider-range").slider("values", 0),
      $("#slider-range").slider("values", 1)
    )
  );
}
