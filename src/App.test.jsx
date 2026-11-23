import React from 'react';
import { render, screen } from '@testing-library/react';
import { beforeEach, afterEach, test, expect, vi } from 'vitest';

vi.mock('./component/layout/layout', () => ({
  default: () => <div>Dashboard layout</div>,
}));

beforeEach(() => sessionStorage.setItem('token', 'test-placeholder'));
afterEach(() => sessionStorage.clear());

test('application renders the dashboard layout with an existing session', async () => {
  const { default: App } = await import('./App');
  render(<App />);
  expect(screen.getByText('Dashboard layout')).toBeInTheDocument();
  expect(document.getElementById('google_translate_element')).not.toBeNull();
});
