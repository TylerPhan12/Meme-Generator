// // Elements
// const imageUrlInput = document.querySelector('#image-url');
// const topTextInput = document.querySelector('#top-text');
// const bottomTextInput = document.querySelector('#bottom-text');
const memeContainer = document.querySelector('#meme-container');
const memeForm = document.querySelector('#meme-form');

memeForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const imageUrlInput = e.target.imageURL;
  const topTextInput = e.target.topText;
  const bottomTextInput = e.target.bottomText;

  // const { imageURL, topText, bottomText } = e.target;

  // Create image, texts
  const image = document.createElement('img');
  image.src = imageUrlInput.value;
  image.classList.add('meme-image');

  const topText = document.createElement('p');
  topText.innerText = topTextInput.value;
  topText.classList.add('meme-top-text');

  const bottomText = document.createElement('p');
  bottomText.innerText = bottomTextInput.value;
  bottomText.classList.add('meme-bottom-text');

  // Create meme div
  const memeDiv = document.createElement('div');
  memeDiv.classList.add('meme');
  // Delete button
  memeDiv.addEventListener('dblclick', function (e) {
    const deleteMeme = e.target.closest('.meme');
    if (deleteMeme) {
      deleteMeme.remove();
    }
  });

  memeDiv.append(image);
  memeDiv.append(topText);
  memeDiv.append(bottomText);

  // Push the memeDiv to memeContainer
  memeContainer.append(memeDiv);

  // Clear the values
  imageUrlInput.value = '';
  topTextInput.value = '';
  bottomTextInput.value = '';
});
