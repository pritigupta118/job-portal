import { BackgroundBeams } from "../components/ui/background-beams"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { z } from "zod"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Link, useNavigate,  } from "react-router-dom"
import axios from "axios"
import { toast } from "sonner"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { setLoading } from "@/redux/slices/authSlice"
import { LoaderCircle } from "lucide-react"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["student", "recruiter"]),
})


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loading} = useSelector((state: RootState)=> state.authSlice)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "student"
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      dispatch(setLoading(true))
      const response = await axios.post("http://localhost:4000/user/login", values, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      console.log(response.data)

      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/')
      }

    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }

    }
    finally{
      dispatch(setLoading(false))
    }
  }

  return (
    <div className="h-[41.5rem] w-full bg-neutral-950 relative flex flex-col items-center gap-4 justify-center antialiased">
      <div className="z-20 rounded-md w-[90%] md:w-4/12 lg:w-3/12 flex flex-col gap-3 p-6 bg-black">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">Login</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-6"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="student" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Student
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="recruiter" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Recruiter
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={loading} type="submit" className="w-full mt-4">{loading ? <LoaderCircle className="animate-spin"/> : "login"}</Button>
          </form>
        </Form>

        <div className="text-xs text-center text-neutral-400">Don't Have an Account? <span><Link to='/signup' className="text-blue-600">Signup</Link></span></div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default Login

