"use client";

import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuth } from "@/contexts/authContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const LoginPage = () => {
  const { toast } = useToast();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const showToast = (title: string, description: string, variant: any) => {
    toast({
      title,
      description,
      variant,
    });
  };

  const authenticateUser = async (username: string, password: string) => {
    setIsLoading(true);
    const uri = `http://localhost:8000/users/login`;
    fetch(uri, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          showToast(
            "Login Error Occured",
            `${response.statusText}`,
            "destructive"
          );
        }
        return response.json();
      })
      .then((data) => {
        const { accessToken, user } = data.data;
        showToast("Login Successful", `Welcome ${user.username}`, "default");
        console.log(user);
        login(accessToken);
      })
      .catch((error) => {
        showToast("Login Error Occured", `${error}`, "destructive");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const userLoginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    authenticateUser(username, password);
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-0">
      <form
        className="p-6 rounded shadow-md w-full max-w-sm border bg-accent"
        onSubmit={userLoginHandler}
      >
        <div className="mb-4">
          <label htmlFor="username" className="block">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="mt-1 p-2 w-full border rounded text-accent outline-none"
            disabled={isLoading}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 p-2 w-full border rounded text-accent outline-none"
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          onClick={userLoginHandler}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          {!isLoading ? "Login" : <LoadingSpinner />}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
