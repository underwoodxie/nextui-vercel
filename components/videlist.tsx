
"use client"
import React, { useEffect } from "react";
import { useState } from 'react';
import { S3Client } from '@aws-sdk/client-s3'
import { ListObjectsCommand } from '@aws-sdk/client-s3'
import getConfig from 'next/config';

const SKEYID="4795305638bdefad2faa38440342f0c9"
const SECRETACCESSKEY="48e36626571982f5495a615785bcbeb0bd0cdf21665b7bb881f93bb0adc5ec73"

const r2 = new S3Client({
  region: 'auto',
  endpoint: "https://05154976162af58540aba71a43673c31.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: SKEYID,
    secretAccessKey: SECRETACCESSKEY,
  },
});

async function getlistObjects() {
  try {
    const response = await r2.send(new ListObjectsCommand({
      Bucket: "meme-viedo",
    }));
    console.log(response.Contents)
    return response.Contents;
  } catch (error) {
    console.error('Error listing objects:', error);
    return [];
  }
}

