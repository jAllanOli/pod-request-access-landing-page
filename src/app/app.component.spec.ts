import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

const sut = async () => {
  await render(AppComponent);
};

describe('AppComponent', () => {
  beforeEach(async () => {
    await sut();
  });

  it('should render the title', async () => {
    expect(screen.getByText('Publish your podcasts')).toBeTruthy();
  });

  it('should remder the body text', () => {
    expect(
      screen.getByText(
        'Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!'
      )
    ).toBeTruthy();
  });
});
