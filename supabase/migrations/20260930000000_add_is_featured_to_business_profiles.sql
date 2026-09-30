-- Migration: Add is_featured column to business_profiles table
-- This column enables Featured Directory subscription functionality
-- Safe to run multiple times (idempotent)

-- Add is_featured column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public'
        AND table_name = 'business_profiles' 
        AND column_name = 'is_featured'
    ) THEN
        ALTER TABLE public.business_profiles 
        ADD COLUMN is_featured BOOLEAN NOT NULL DEFAULT false;
        
        -- Add comment to document the column
        COMMENT ON COLUMN public.business_profiles.is_featured IS 'Whether this business has an active Featured Directory subscription';
        
        -- Create index for efficient Featured business queries
        CREATE INDEX IF NOT EXISTS idx_business_profiles_is_featured 
        ON public.business_profiles(is_featured) 
        WHERE is_featured = true;
        
        RAISE NOTICE 'Added is_featured column to business_profiles table';
    ELSE
        RAISE NOTICE 'is_featured column already exists in business_profiles table';
    END IF;
END $$;

-- Add subscription-related columns if they don't exist
DO $$ 
BEGIN
    -- Add subscription_status
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public'
        AND table_name = 'business_profiles' 
        AND column_name = 'subscription_status'
    ) THEN
        ALTER TABLE public.business_profiles 
        ADD COLUMN subscription_status TEXT;
        
        COMMENT ON COLUMN public.business_profiles.subscription_status IS 'Stripe subscription status (active, trialing, canceled, etc.)';
        
        RAISE NOTICE 'Added subscription_status column to business_profiles table';
    END IF;
    
    -- Add subscription_id
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public'
        AND table_name = 'business_profiles' 
        AND column_name = 'subscription_id'
    ) THEN
        ALTER TABLE public.business_profiles 
        ADD COLUMN subscription_id TEXT;
        
        COMMENT ON COLUMN public.business_profiles.subscription_id IS 'Stripe subscription ID';
        
        RAISE NOTICE 'Added subscription_id column to business_profiles table';
    END IF;
    
    -- Add subscription_end_date
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public'
        AND table_name = 'business_profiles' 
        AND column_name = 'subscription_end_date'
    ) THEN
        ALTER TABLE public.business_profiles 
        ADD COLUMN subscription_end_date TIMESTAMP WITH TIME ZONE;
        
        COMMENT ON COLUMN public.business_profiles.subscription_end_date IS 'When the current subscription period ends';
        
        RAISE NOTICE 'Added subscription_end_date column to business_profiles table';
    END IF;
END $$;
