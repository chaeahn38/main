var text1 = "안녕하세요, 나는 텍스트의 주인이지만 동시에 텍스트가 없이는 아무 말도 할 수 없습니다. 나는 누구이며 지금 어디 있습니까?";
var text2 = "단어들이 이어지지 않은 채 원고지에 흩어졌다. 모두 이어서 문장이 되도록 해야 하는데 생각만 들고 거기에 필요한 체력은 최소한도 없었다. 더 정확히 말면 체력보단 폐활량이 모자랐다. 하나의 문장을 천천히 숨을 쉬며 읽고 거기서 꾹 하고 한 번 숨을 멈춘 다음 머릿속에서 뜻을 풀이하고 어순을 정리할 것, 그리고 조심스럽게 숨을 내쉬면서 풀이한 문장을 쓰는 것이 요령이라고 번약가 에이 씨는 말했다. 하지만 나는 단어 하나를 읽는 데도 숨이 차서, 힘들어하면서 이런저런 생각을 하면 다음 단어에는 거의 도달하지도 못한다. 그래도 적어도 나는 단어 하나하나의 낯선 감촉에 충실한 편이고 지금은 그것이 더 중요할 수도 있다고 생각한다. 적어도 단어 하나하나를 조심스럽게 건너편 강변에 던지는 느낌이 있었다. 그래서인지 전체가 이리저리 흩어지는 것 같기도 하지만 전체를 다 생각할 여유는 엇ㅂ다. 전체는 아무렴 어떠냐는 생각까지 들었다. 나는 말보다 내가 먼저 변신할까 봐 몹시 무서울 때가 있다.  단어들이 이어지지 않은 채 원고지에 흩어졌다. 모두 이어서 문장이 되도록 해야 하는데 생각만 들고 거기에 필요한 체력은 최소한도 없었다. 더 정확히 말면 체력보단 폐활량이 모자랐다. 하나의 문장을 천천히 숨을 쉬며 읽고 거기서 꾹 하고 한 번 숨을 멈춘 다음 머릿속에서 뜻을 풀이하고 어순을 정리할 것, 그리고 조심스럽게 숨을 내쉬면서 풀이한 문장을 쓰는 것이 요령이라고 번약가 에이 씨는 말했다. 하지만 나는 단어 하나를 읽는 데도 숨이 차서, 힘들어하면서 이런저런 생각을 하면 다음 단어에는 거의 도달하지도 못한다. 그래도 적어도 나는 단어 하나하나의 낯선 감촉에 충실한 편이고 지금은 그것이 더 중요할 수도 있다고 생각한다. 적어도 단어 하나하나를 조심스럽게 건너편 강변에 던지는 느낌이 있었다. 그래서인지 전체가 이리저리 흩어지는 것 같기도 하지만 전체를 다 생각할 여유는 엇ㅂ다. 전체는 아무렴 어떠냐는 생각까지 들었다. 나는 말보다 내가 먼저 변신할까 봐 몹시 무서울 때가 있다.  - 다와다 요코, 글자를 옮기는 사람- 다와다 요코, 글자를 옮기는 사람";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rect(0,0, windowWidth, windowHeight);
  text(text1, mouseX, mouseY, windowWidth-mouseX, windowHeight-mouseY);
  text(text2, 20, 20, mouseX, mouseY);


  textSize(30);
  // textLeading(40);

}
