import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { fireEvent, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

const sut = async () => {
  await render(AppComponent, {
    imports: [FormsModule],
  });
};

describe('AppComponent', () => {
  let input: HTMLInputElement;

  beforeEach(async () => {
    await sut();
    input = screen.getByTestId('email-input');
  });

  it('should render the title', () => {
    expect(screen.getByText('Publish your podcasts')).toBeTruthy();
  });

  it('should render the body text', () => {
    expect(
      screen.getByText(
        'Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!'
      )
    ).toBeTruthy();
  });

  it('should render the email input', () => {
    expect(input).toBeTruthy();
  });

  it('should render the submit button', () => {
    expect(input).toBeTruthy();
  });

  it('should not display the error message when the aplication starts', () => {
    expect(screen.queryByTestId('error-message')).toBeFalsy();
  });

  it('should display the error message when user interacts with the input and it is still empty', async () => {
    fireEvent.click(input);
    fireEvent.blur(input);
    expect(screen.getByTestId('error-message')).toBeTruthy();
  });

  it('should display the error message when the email provided is not valid', () => {
    userEvent.type(input, 'teste');
    fireEvent.blur(input);
    expect(screen.getByTestId('error-message')).toBeTruthy();
  });

  it('should not display the error message when the email provided is valid', () => {
    userEvent.type(input, 'email@email.com');
    expect(screen.queryByTestId('error-message')).toBeFalsy();
  });
});
