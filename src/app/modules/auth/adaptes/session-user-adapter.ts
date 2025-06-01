import { SessionUser } from '../models/session-user';

export const sessionUserAdapter = (data: any): SessionUser => {
  const { session, user } = data;

  return {
    id: user.id,
    email: user.email,
    created_at: user.created_at,
    access_token: session.access_token,
  };
};
