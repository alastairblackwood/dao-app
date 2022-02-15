import express, { Request, Response } from 'express';
import RequestUserInterface from './RequestUserInterface';

export interface RequestWithInterfaceProfile extends Request {
  user: RequestUserInterface;
}
