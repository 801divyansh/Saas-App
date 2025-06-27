"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { subjects } from "@/constants"
import { Textarea } from "./ui/textarea"
import { createCompanion } from "@/lib/actions/companion.actions"
import { redirect } from "next/navigation"
import { useState } from 'react';


const formSchema = z.object({
  name: z.string().min(1, {message: 'Companion is required'}),
  subject: z.string().min(1, {message: 'Subject is required'}),
  topic: z.string().min(1, {message: 'Topic is required'}),
  voice: z.string().min(1, {message: 'Voice is required'}),
  style: z.string().min(1, {message: 'Style is required'}),
  duration: z.coerce.number().min(1, {message: 'Duration is required'}),
})

const CompanionForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,
        },
    })
  
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        const companion = await createCompanion(values);

        if(companion) {
          redirect(`/companions/${companion.id}`);
        } else {
          console.log("Failed to create a companion");
          redirect('/');
        }
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mb-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the companion name" {...field} className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
                  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive " />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject Name</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                    <SelectTrigger className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
                          focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                          aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
                        <SelectValue placeholder="Select the subject" />
                    </SelectTrigger>
                    <SelectContent>
                        {subjects.map((subject)=> (
                            <SelectItem
                                value={subject}
                                key={subject}
                                className="capitalize"
                            >
                                {subject}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion help with?</FormLabel>
              <FormControl>
                <Textarea placeholder="Ex. Derivates & Integrals" {...field} className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
                  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voice</FormLabel>
                <FormControl>
                      <Select onValueChange={field.onChange}
                          value={field.value}
                          defaultValue={field.value}
                      >
                          <SelectTrigger className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
                                focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                                aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
                              <SelectValue placeholder="Select the voice" />
                          </SelectTrigger>
                          <SelectContent>
                              <SelectItem value="male">
                                  Male
                              </SelectItem>
                              <SelectItem value="female">
                                  Female
                              </SelectItem>
                          </SelectContent>
                      </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style</FormLabel>
                <FormControl>
                      <Select onValueChange={field.onChange}
                          value={field.value}
                          defaultValue={field.value}
                      >
                          <SelectTrigger className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
                                focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                                aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
                              <SelectValue placeholder="Select the style" />
                          </SelectTrigger>
                          <SelectContent>
                              <SelectItem value="formal">
                                  Formal
                              </SelectItem>
                              <SelectItem value="casual">
                                  Casual
                              </SelectItem>
                          </SelectContent>
                      </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration in minutes</FormLabel>
              <FormControl>
                <Input type="number" placeholder="15" {...field} className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
                    focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                    aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full rounded-xl py-2 font-semibold transition-all duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:brightness-110 hover:shadow-xl"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-pulse">Building...</span>
          ) : (
            'Build Your Companion'
          )}
        </Button>
      </form>
    </Form>
  )
}

export default CompanionForm
